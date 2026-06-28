from flask import Blueprint, jsonify, request

from backend.services.analysis_service import (
    analysis_to_response,
    delete_analysis,
    get_analysis,
    list_analyses_for_user,
    run_analysis_pipeline,
    save_uploaded_file,
)
from backend.utils.auth_helpers import auth_required, optional_auth
from backend.utils.validators import (
    validate_language,
    validate_upload_file,
    validate_youtube_url,
)

analysis_bp = Blueprint("analysis", __name__, url_prefix="/api/analysis")


@analysis_bp.post("")
@optional_auth
def create_analysis(user):
    language = (request.form.get("language") or "english").strip().lower()
    language_error = validate_language(language)
    if language_error:
        return jsonify({"error": language_error}), 400

    user_email = user.email if user else None
    source_type = (request.form.get("source_type") or "").strip().lower()

    try:
        if source_type == "youtube":
            url = (request.form.get("url") or "").strip()
            url_error = validate_youtube_url(url)
            if url_error:
                return jsonify({"error": url_error}), 400

            record = run_analysis_pipeline(
                source=url,
                language=language,
                source_type="youtube",
                source_label=url,
                user_email=user_email,
            )
        elif source_type == "upload":
            file_storage = request.files.get("file")
            filename, file_error = validate_upload_file(file_storage)
            if file_error:
                return jsonify({"error": file_error}), 400

            saved_path = save_uploaded_file(file_storage, filename)
            record = run_analysis_pipeline(
                source=saved_path,
                language=language,
                source_type="upload",
                source_label=filename,
                user_email=user_email,
            )
        else:
            return jsonify({"error": "source_type must be youtube or upload."}), 400
    except Exception as exc:
        return jsonify({"error": f"Analysis failed: {exc}"}), 500

    if record.status == "failed":
        return jsonify({"error": record.error or "Analysis failed."}), 500

    return jsonify(analysis_to_response(record)), 201


@analysis_bp.get("/<analysis_id>")
def get_analysis_by_id(analysis_id: str):
    record = get_analysis(analysis_id)
    if not record:
        return jsonify({"error": "Analysis not found."}), 404
    return jsonify(analysis_to_response(record)), 200


@analysis_bp.post("/list")
@auth_required
def list_analyses(user):
    data = request.get_json(silent=True) or {}
    analysis_ids = data.get("ids")
    if analysis_ids is not None and not isinstance(analysis_ids, list):
        return jsonify({"error": "ids must be a list."}), 400

    analyses = list_analyses_for_user(user.email, analysis_ids)
    return jsonify({"analyses": analyses}), 200


@analysis_bp.delete("/<analysis_id>")
@auth_required
def remove_analysis(user, analysis_id: str):
    deleted = delete_analysis(analysis_id, user.email)
    if not deleted:
        return jsonify({"error": "Analysis not found or access denied."}), 404
    return jsonify({"message": "Analysis deleted."}), 200
