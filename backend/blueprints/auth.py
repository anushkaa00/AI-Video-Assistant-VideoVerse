from flask import Blueprint, jsonify, request

from backend.services.auth_service import login_user, logout_user, register_user, serialize_user
from backend.utils.auth_helpers import auth_required, get_bearer_token

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")


@auth_bp.post("/register")
def register():
    data = request.get_json(silent=True) or {}
    result, error = register_user(
        name=data.get("name", ""),
        email=data.get("email", ""),
        password=data.get("password", ""),
    )
    if error:
        return jsonify({"error": error}), 400
    return jsonify(result), 201


@auth_bp.post("/login")
def login():
    data = request.get_json(silent=True) or {}
    result, error = login_user(
        email=data.get("email", ""),
        password=data.get("password", ""),
    )
    if error:
        return jsonify({"error": error}), 401
    return jsonify(result), 200


@auth_bp.post("/logout")
def logout():
    logout_user(get_bearer_token())
    return jsonify({"message": "Logged out successfully."}), 200


@auth_bp.get("/me")
@auth_required
def me(user):
    return jsonify({"user": serialize_user(user)}), 200
