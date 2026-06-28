from flask import Blueprint, jsonify, request

from backend.services.analysis_service import ask_about_analysis, get_chat_history
from backend.utils.auth_helpers import auth_required

chat_bp = Blueprint("chat", __name__, url_prefix="/api/chat")


@chat_bp.get("/<analysis_id>/history")
@auth_required
def history(user, analysis_id: str):
    messages = get_chat_history(analysis_id)
    return jsonify({"messages": messages}), 200


@chat_bp.post("/<analysis_id>")
@auth_required
def chat(user, analysis_id: str):
    data = request.get_json(silent=True) or {}
    question = (data.get("question") or "").strip()
    if not question:
        return jsonify({"error": "Question is required."}), 400

    answer, error = ask_about_analysis(analysis_id, question)
    if error:
        status = 404 if "not found" in error.lower() else 400
        return jsonify({"error": error}), status

    return jsonify({"answer": answer, "messages": get_chat_history(analysis_id)}), 200
