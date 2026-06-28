"""In-memory session storage — no persistent database."""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any
import uuid


@dataclass
class UserRecord:
    email: str
    name: str
    password_hash: str


@dataclass
class AnalysisRecord:
    id: str
    user_id: str | None
    title: str
    source_type: str
    source_label: str
    language: str
    status: str
    transcript: str = ""
    summary: str = ""
    highlights: str = ""
    timestamps: str = ""
    action_items: str = ""
    key_decisions: str = ""
    open_questions: str = ""
    created_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    error: str | None = None


class MemoryStore:
    def __init__(self) -> None:
        self.users: dict[str, UserRecord] = {}
        self.tokens: dict[str, str] = {}
        self.analyses: dict[str, AnalysisRecord] = {}
        self.rag_chains: dict[str, Any] = {}
        self.chat_histories: dict[str, list[dict[str, str]]] = {}

    def create_token(self, email: str) -> str:
        token = uuid.uuid4().hex
        self.tokens[token] = email
        return token

    def get_user_by_token(self, token: str | None) -> UserRecord | None:
        if not token:
            return None
        email = self.tokens.get(token)
        if not email:
            return None
        return self.users.get(email)

    def create_analysis_id(self) -> str:
        return uuid.uuid4().hex


store = MemoryStore()
