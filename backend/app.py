import os
import sys

from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

load_dotenv()

from backend.config import MAX_CONTENT_LENGTH, SECRET_KEY, UPLOAD_FOLDER
from backend.blueprints.auth import auth_bp
from backend.blueprints.analysis import analysis_bp
from backend.blueprints.chat import chat_bp


def create_app() -> Flask:
    app = Flask(__name__)
    app.config["SECRET_KEY"] = SECRET_KEY
    app.config["MAX_CONTENT_LENGTH"] = MAX_CONTENT_LENGTH

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    CORS(
        app,
        resources={r"/api/*": {"origins": "*"}},
        supports_credentials=True,
    )

    app.register_blueprint(auth_bp)
    app.register_blueprint(analysis_bp)
    app.register_blueprint(chat_bp)

    @app.get("/api/health")
    def health():
        return jsonify({"status": "ok", "service": "VideoVerse API"}), 200

    @app.errorhandler(413)
    def request_entity_too_large(_error):
        max_mb = MAX_CONTENT_LENGTH // (1024 * 1024)
        return jsonify({"error": f"File exceeds maximum size of {max_mb} MB."}), 413

    @app.errorhandler(404)
    def not_found(_error):
        return jsonify({"error": "Resource not found."}), 404

    @app.errorhandler(500)
    def internal_error(_error):
        return jsonify({"error": "Internal server error."}), 500

    return app


app = create_app()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("FLASK_PORT", "5000")), debug=True)
