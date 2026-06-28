import os

MAX_CONTENT_LENGTH = int(os.getenv("MAX_UPLOAD_SIZE_MB", "500")) * 1024 * 1024
ALLOWED_EXTENSIONS = {"mp4", "mov", "mkv", "avi", "mp3", "wav", "webm", "m4a"}
UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", "uploads")
SECRET_KEY = os.getenv("FLASK_SECRET_KEY", "videoverse-dev-secret-change-in-production")
API_TIMEOUT_SECONDS = int(os.getenv("API_TIMEOUT_SECONDS", "1800"))
