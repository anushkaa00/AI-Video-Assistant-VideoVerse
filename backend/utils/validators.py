import re
from urllib.parse import urlparse

from werkzeug.utils import secure_filename

from backend.config import ALLOWED_EXTENSIONS, MAX_CONTENT_LENGTH


YOUTUBE_PATTERNS = (
    r"(?:https?://)?(?:www\.)?youtube\.com/watch\?v=[\w-]{11}",
    r"(?:https?://)?(?:www\.)?youtube\.com/shorts/[\w-]{11}",
    r"(?:https?://)?youtu\.be/[\w-]{11}",
    r"(?:https?://)?(?:www\.)?youtube\.com/embed/[\w-]{11}",
)


def validate_email(email: str) -> str | None:
    email = (email or "").strip().lower()
    if not email:
        return "Email is required."
    if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email):
        return "Enter a valid email address."
    return None


def validate_password(password: str, *, is_signup: bool = False) -> str | None:
    if not password:
        return "Password is required."
    if is_signup and len(password) < 6:
        return "Password must be at least 6 characters."
    return None


def validate_name(name: str) -> str | None:
    name = (name or "").strip()
    if not name:
        return "Name is required."
    if len(name) < 2:
        return "Name must be at least 2 characters."
    return None


def validate_youtube_url(url: str) -> str | None:
    url = (url or "").strip()
    if not url:
        return "YouTube URL is required."
    if not any(re.match(pattern, url) for pattern in YOUTUBE_PATTERNS):
        return "Enter a valid YouTube URL."
    parsed = urlparse(url)
    if parsed.scheme not in {"http", "https", ""}:
        return "Enter a valid YouTube URL."
    return None


def validate_language(language: str) -> str | None:
    if language not in {"english", "hinglish"}:
        return "Language must be english or hinglish."
    return None


def allowed_file(filename: str) -> bool:
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def validate_upload_file(file_storage) -> tuple[str | None, str | None]:
    if not file_storage or not file_storage.filename:
        return None, "Please select a file to upload."

    filename = secure_filename(file_storage.filename)
    if not filename:
        return None, "Invalid file name."

    if not allowed_file(filename):
        return None, "Unsupported file type. Allowed: mp4, mov, mkv, avi, mp3, wav."

    file_storage.seek(0, 2)
    size = file_storage.tell()
    file_storage.seek(0)

    if size <= 0:
        return None, "Uploaded file is empty."

    if size > MAX_CONTENT_LENGTH:
        max_mb = MAX_CONTENT_LENGTH // (1024 * 1024)
        return None, f"File exceeds maximum size of {max_mb} MB."

    return filename, None
