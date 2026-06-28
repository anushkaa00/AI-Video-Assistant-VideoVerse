from werkzeug.security import check_password_hash, generate_password_hash

from backend.stores.memory_store import UserRecord, store
from backend.utils.validators import (
    validate_email,
    validate_name,
    validate_password,
)


def register_user(name: str, email: str, password: str) -> tuple[dict | None, str | None]:
    name_error = validate_name(name)
    if name_error:
        return None, name_error

    email_error = validate_email(email)
    if email_error:
        return None, email_error

    email = email.strip().lower()
    password_error = validate_password(password, is_signup=True)
    if password_error:
        return None, password_error

    if email in store.users:
        return None, "An account with this email already exists."

    store.users[email] = UserRecord(
        email=email,
        name=name.strip(),
        password_hash=generate_password_hash(password),
    )
    token = store.create_token(email)
    user = store.users[email]

    return {
        "token": token,
        "user": {"email": user.email, "name": user.name},
    }, None


def login_user(email: str, password: str) -> tuple[dict | None, str | None]:
    email_error = validate_email(email)
    if email_error:
        return None, email_error

    password_error = validate_password(password)
    if password_error:
        return None, password_error

    email = email.strip().lower()
    user = store.users.get(email)
    if not user or not check_password_hash(user.password_hash, password):
        return None, "Invalid email or password."

    token = store.create_token(email)
    return {
        "token": token,
        "user": {"email": user.email, "name": user.name},
    }, None


def logout_user(token: str | None) -> None:
    if token and token in store.tokens:
        del store.tokens[token]


def serialize_user(user: UserRecord) -> dict:
    return {"email": user.email, "name": user.name}
