from __future__ import annotations

import os
import shutil

from utils.audio_processor import process_input
from core.transcriber import transcribe_all
from core.summarizer import summarize, generate_title
from core.extractor import (
    extract_action_items,
    extract_key_decisions,
    extract_key_highlights,
    extract_questions,
    extract_timestamps,
)
from core.rag_engine import build_rag_chain

from backend.config import UPLOAD_FOLDER
from backend.stores.memory_store import AnalysisRecord, store


os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def _serialize_analysis(record: AnalysisRecord, include_content: bool = True) -> dict:
    data = {
        "id": record.id,
        "title": record.title,
        "source_type": record.source_type,
        "source_label": record.source_label,
        "language": record.language,
        "status": record.status,
        "created_at": record.created_at,
        "error": record.error,
    }
    if include_content:
        data.update(
            {
                "transcript": record.transcript,
                "summary": record.summary,
                "highlights": record.highlights,
                "timestamps": record.timestamps,
                "action_items": record.action_items,
                "key_decisions": record.key_decisions,
                "open_questions": record.open_questions,
            }
        )
    return data


def run_analysis_pipeline(
    *,
    source: str,
    language: str,
    source_type: str,
    source_label: str,
    user_email: str | None,
) -> AnalysisRecord:
    analysis_id = store.create_analysis_id()
    record = AnalysisRecord(
        id=analysis_id,
        user_id=user_email,
        title="Processing...",
        source_type=source_type,
        source_label=source_label,
        language=language,
        status="processing",
    )
    store.analyses[analysis_id] = record

    try:
        chunks = process_input(source)
        transcript = transcribe_all(chunks, language=language)
        title = generate_title(transcript)
        summary = summarize(transcript)
        highlights = extract_key_highlights(transcript)
        timestamps = extract_timestamps(transcript)
        action_items = extract_action_items(transcript)
        key_decisions = extract_key_decisions(transcript)
        open_questions = extract_questions(transcript)
        rag_chain = build_rag_chain(transcript)

        record.title = title
        record.transcript = transcript
        record.summary = summary
        record.highlights = highlights
        record.timestamps = timestamps
        record.action_items = action_items
        record.key_decisions = key_decisions
        record.open_questions = open_questions
        record.status = "completed"
        store.rag_chains[analysis_id] = rag_chain
        store.chat_histories.setdefault(analysis_id, [])
    except Exception as exc:
        record.status = "failed"
        record.error = str(exc)
        raise
    finally:
        _cleanup_source(source, source_type)

    return record


def _cleanup_source(source: str, source_type: str) -> None:
    if source_type == "upload" and os.path.exists(source):
        try:
            os.remove(source)
        except OSError:
            pass


def save_uploaded_file(file_storage, filename: str) -> str:
    path = os.path.join(UPLOAD_FOLDER, f"{store.create_analysis_id()}_{filename}")
    file_storage.save(path)
    return path


def get_analysis(analysis_id: str) -> AnalysisRecord | None:
    return store.analyses.get(analysis_id)


def list_analyses_for_user(user_email: str, analysis_ids: list[str] | None = None) -> list[dict]:
    results: list[dict] = []
    for analysis_id, record in store.analyses.items():
        if record.user_id and record.user_id != user_email:
            continue
        if analysis_ids is not None and analysis_id not in analysis_ids:
            continue
        results.append(_serialize_analysis(record, include_content=False))
    results.sort(key=lambda item: item["created_at"], reverse=True)
    return results


def delete_analysis(analysis_id: str, user_email: str | None) -> bool:
    record = store.analyses.get(analysis_id)
    if not record:
        return False
    if record.user_id and record.user_id != user_email:
        return False

    store.analyses.pop(analysis_id, None)
    store.rag_chains.pop(analysis_id, None)
    store.chat_histories.pop(analysis_id, None)
    return True


def ask_about_analysis(analysis_id: str, question: str) -> tuple[str | None, str | None]:
    record = store.analyses.get(analysis_id)
    if not record:
        return None, "Analysis not found."
    if record.status != "completed":
        return None, "Analysis is not ready for chat yet."

    rag_chain = store.rag_chains.get(analysis_id)
    if not rag_chain:
        rag_chain = build_rag_chain(record.transcript)
        store.rag_chains[analysis_id] = rag_chain

    answer = rag_chain.invoke(question)
    history = store.chat_histories.setdefault(analysis_id, [])
    history.append({"role": "user", "content": question})
    history.append({"role": "assistant", "content": answer})
    return answer, None


def get_chat_history(analysis_id: str) -> list[dict[str, str]]:
    return store.chat_histories.get(analysis_id, [])


def analysis_to_response(record: AnalysisRecord) -> dict:
    return _serialize_analysis(record, include_content=True)
