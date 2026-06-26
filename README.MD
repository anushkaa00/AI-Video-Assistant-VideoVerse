# 🎥 AI Video Assistant

Build a production-ready AI-powered video assistant that can transcribe videos, generate summaries, extract action items, and answer questions from video content using Retrieval-Augmented Generation (RAG).

![Python](https://img.shields.io/badge/Python-3.10+-blue)
![LangChain](https://img.shields.io/badge/LangChain-Agentic_AI-green)
![Whisper](https://img.shields.io/badge/OpenAI-Whisper-orange)
![Mistral](https://img.shields.io/badge/Mistral-AI-red)
![ChromaDB](https://img.shields.io/badge/VectorDB-ChromaDB-purple)
![License](https://img.shields.io/badge/License-MIT-brightgreen)

---

## 🚀 Overview

AI Video Assistant transforms long videos into actionable insights.

Simply upload a video or provide a YouTube link, and the system will:

✅ Convert speech to text using Whisper

✅ Generate concise AI summaries

✅ Extract important action items

✅ Store content in ChromaDB for semantic search

✅ Enable conversational Q&A with the video

✅ Export generated insights

---

## ✨ Features

### 🎤 Audio / YouTube Input
- Upload local video/audio files
- Process YouTube videos
- Automatic audio extraction

### 🤖 Local Whisper Transcription
- Speech-to-text using OpenAI Whisper
- High-quality transcription
- Supports long-form content

### 📝 AI Summarization
- Generate concise summaries
- Key highlights extraction
- Meeting notes generation

### ✅ Action Item Extraction
- Detect tasks and responsibilities
- Extract deadlines and commitments
- Organize actionable outcomes

### 🗂️ RAG with ChromaDB
- Store transcript embeddings
- Semantic search over content
- Context-aware retrieval

### 💬 Chat with Video
- Ask questions about the video
- Context-aware responses
- Powered by Mistral AI + LangChain

### 📤 Export Results
- Download transcript
- Export summary
- Save action items

---

## 🏗️ Architecture

```text
Video / YouTube URL
         │
         ▼
 Audio Extraction
         │
         ▼
 Whisper Transcription
         │
         ▼
 Transcript Processing
         │
 ┌───────┴────────┐
 ▼                ▼
Summary      Action Items
 │
 ▼
Embeddings
 │
 ▼
ChromaDB
 │
 ▼
RAG Pipeline
 │
 ▼
Chat Interface
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Python | Backend Development |
| LangChain | LLM Orchestration |
| Whisper | Speech-to-Text |
| Mistral AI | LLM Responses |
| ChromaDB | Vector Database |
| Streamlit | User Interface |
| YouTube Loader | Video Processing |
| Sentence Transformers | Embeddings |



### Create Virtual Environment

```bash
python uv venv
```

Activate:

#### Windows

```bash
.venv\Scripts\activate
```

#### Linux/Mac

```bash
source .venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 🔑 Environment Variables

Create a `.env` file:

```env
MISTRAL_API_KEY=your_mistral_api_key
```

---

## ▶️ Run Application

```bash
streamlit run app.py
```

Application will start at:

```text
http://localhost:8501
```

---

## 💡 Example Workflow

1. Upload a video or provide a YouTube URL.
2. Audio is extracted automatically.
3. Whisper generates transcript.
4. Mistral AI creates summary.
5. Action items are extracted.
6. Transcript chunks are embedded.
7. ChromaDB stores embeddings.
8. User can chat with video content.
9. Results can be exported.

---

## 📸 Sample Use Cases

### Meeting Assistant
- Meeting notes
- Action item tracking
- Decision logging

### Educational Videos
- Lecture summaries
- Concept clarification
- Interactive Q&A

### Podcasts
- Episode summaries
- Key insights extraction
- Topic exploration

### YouTube Content Analysis
- Video understanding
- Research support
- Knowledge extraction

---

## 🔮 Future Improvements

- Multi-language support
- Speaker diarization
- PDF report generation
- Team collaboration
- Real-time meeting assistant
- Cloud deployment
- Multi-video knowledge base

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request


## 👩‍💻 Author

**Anushka Kulkarni**

B.Tech Artificial Intelligence & Data Science

Built using Python, LangChain, Whisper, Mistral AI, and ChromaDB.