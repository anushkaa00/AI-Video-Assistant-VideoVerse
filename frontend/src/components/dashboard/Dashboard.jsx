import { useContext } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  CheckCircle2,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import GlassCard from "../components/common/GlassCard";
import { MeetingContext } from "../context/MeetingContext";

export default function Dashboard() {
  const { meetingData } = useContext(MeetingContext);

  if (!meetingData) {
    return (
      <div className="min-h-screen bg-[#050816]">
        <Navbar />

        <div className="flex h-[80vh] items-center justify-center px-6">
          <GlassCard className="max-w-xl p-10 text-center">
            <Sparkles
              className="mx-auto mb-6 text-cyan-400"
              size={60}
            />

            <h2 className="text-3xl font-bold text-white">
              No Analysis Found
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Upload and analyze a video first to view AI-generated
              summaries, highlights and transcripts.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-4 font-semibold text-white"
            >
              Go Home

              <ArrowRight size={18} />
            </Link>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-12"
        >
          <h1 className="text-5xl font-black text-white">
            AI Video Dashboard
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            Your analyzed video results.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          <GlassCard className="p-7">
            <FileText
              className="mb-5 text-cyan-400"
              size={34}
            />

            <h3 className="mb-4 text-2xl font-bold text-white">
              Summary
            </h3>

            <p className="leading-8 text-slate-300">
              {meetingData.summary ||
                "Summary not available."}
            </p>
          </GlassCard>

          <GlassCard className="p-7">
            <Clock3
              className="mb-5 text-cyan-400"
              size={34}
            />

            <h3 className="mb-4 text-2xl font-bold text-white">
              Highlights
            </h3>

            <div className="space-y-3">
              {(meetingData.highlights || []).length > 0 ? (
                meetingData.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3"
                  >
                    <CheckCircle2
                      className="mt-1 text-green-400"
                      size={18}
                    />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-slate-400">
                  No highlights available.
                </p>
              )}
            </div>
          </GlassCard>

          <GlassCard className="p-7">
            <MessageSquare
              className="mb-5 text-cyan-400"
              size={34}
            />

            <h3 className="mb-4 text-2xl font-bold text-white">
              Transcript
            </h3>

            <div className="max-h-[350px] overflow-y-auto whitespace-pre-wrap leading-7 text-slate-300">
              {meetingData.transcript ||
                "Transcript not available."}
            </div>
          </GlassCard>

        </div>

        <GlassCard className="mt-10 p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>

              <h2 className="text-3xl font-bold text-white">
                Continue Exploring
              </h2>

              <p className="mt-3 text-slate-400">
                Ask AI questions about your analyzed video.
              </p>

            </div>

            <Link
              to="/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Chat with Video
            </Link>

          </div>
        </GlassCard>

      </div>
    </div>
  );
}