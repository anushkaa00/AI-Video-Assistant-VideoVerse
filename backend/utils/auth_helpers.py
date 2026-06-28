from functools import wraps

from flask import jsonify, request

from backend.stores.memory_store import store


def get_bearer_token() -> str | None:
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        return auth_header[7:].strip()
    return None


def get_current_user_email() -> str | None:
    token = get_bearer_token()
    if not token:
        return None
    return store.tokens.get(token)


def auth_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        token = get_bearer_token()
        user = store.get_user_by_token(token)
        if not user:
            return jsonify({"error": "Authentication required."}), 401
        return fn(user, *args, **kwargs)

    return wrapper


def optional_auth(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        token = get_bearer_token()
        user = store.get_user_by_token(token)
        return fn(user, *args, **kwargs)

    return wrapper
