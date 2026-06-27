import { useEffect, useRef, useState } from "react";
import api from "../services/api";
import {
  Send,
  Bot,
  User,
  Loader2,
  Trash2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Navbar from "../components/Navbar";

const API = "http://127.0.0.1:5000";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm VideoVerse AI. Ask me anything about your analyzed video.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();

    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentQuestion = question;

    setQuestion("");
    setLoading(true);

    try {
      const res = await api.post("/chat", {
        question: currentQuestion,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            res.data.answer ||
            "No response received from the AI.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            err?.response?.data?.error ||
            "Unable to connect to backend.",
        },
      ]);
    }

    setLoading(false);
  }

  function clearChat() {
    setMessages([
      {
        role: "assistant",
        content:
          "👋 Chat cleared. Ask me anything about your uploaded video.",
      },
    ]);
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <div className="mx-auto flex max-w-7xl gap-8 px-6 pt-28 pb-10">

        {/* Sidebar */}

        <aside className="hidden w-80 shrink-0 lg:block">
          <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

            <div className="mb-8 flex items-center gap-3">

              <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-3">
                <Sparkles className="text-white" />
              </div>

              <div>

                <h2 className="text-xl font-bold text-white">
                  VideoVerse AI
                </h2>

                <p className="text-sm text-slate-400">
                  AI Video Assistant
                </p>

              </div>

            </div>

            <button
              onClick={clearChat}
              className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 py-3 text-red-300 transition hover:bg-red-500/20"
            >
              <Trash2 size={18} />

              Clear Chat
            </button>

            <div className="space-y-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <h3 className="mb-3 font-semibold text-white">
                  Tips
                </h3>

                <ul className="space-y-3 text-sm text-slate-400">

                  <li>• Summarize the video</li>

                  <li>• Explain any topic</li>

                  <li>• Ask about timestamps</li>

                  <li>• Find important highlights</li>

                  <li>• Extract action items</li>

                </ul>

              </div>

              <a
                href="/"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-3 font-medium text-white"
              >
                Home

                <ExternalLink size={18} />
              </a>

            </div>

          </div>
        </aside>

        {/* Chat */}

                <main className="flex-1">
          <div className="flex h-[82vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl">

            {/* Header */}

            <div className="border-b border-white/10 bg-white/5 px-6 py-5">
              <h1 className="text-2xl font-bold text-white">
                Chat with Video
              </h1>

              <p className="mt-1 text-sm text-slate-400">
                Ask anything about your analyzed video.
              </p>
            </div>

            {/* Messages */}

            <div className="flex-1 space-y-6 overflow-y-auto p-6">

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-3xl gap-4 ${
                      message.role === "user"
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >
                    {/* Avatar */}

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        message.role === "assistant"
                          ? "bg-gradient-to-r from-indigo-600 to-cyan-500"
                          : "bg-slate-700"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot size={20} className="text-white" />
                      ) : (
                        <User size={20} className="text-white" />
                      )}
                    </div>

                    {/* Bubble */}

                    <div
                      className={`rounded-2xl px-5 py-4 leading-7 ${
                        message.role === "assistant"
                          ? "border border-white/10 bg-[#0b1023]"
                          : "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm text-slate-200">
                        {message.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500">
                      <Bot className="text-white" size={20} />
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1023] px-5 py-4">
                      <Loader2
                        size={20}
                        className="animate-spin text-cyan-400"
                      />

                      <span className="text-slate-300">
                        Thinking...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />

            </div>

            {/* Input */}

            <form
              onSubmit={sendMessage}
              className="border-t border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center gap-4">

                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask something about your video..."
                  className="flex-1 rounded-xl border border-white/10 bg-[#0b1023] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />

                <button
                  disabled={loading}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send size={20} className="text-white" />
                </button>

              </div>
            </form>

          </div>
        </main>
                {/* End Main */}
      </div>
    </div>
  );
}