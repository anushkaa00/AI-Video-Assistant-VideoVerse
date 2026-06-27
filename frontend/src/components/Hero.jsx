import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-44 pb-32">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        {/* Top Glow */}

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[170px]" />

        {/* Left */}

        <div className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[150px]" />

        {/* Right */}

        <div className="absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Bottom */}

        <div className="absolute bottom-0 left-1/2 h-[250px] w-[800px] -translate-x-1/2 bg-gradient-to-r from-violet-500/5 via-cyan-500/10 to-violet-500/5 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#12172b]/70 px-6 py-3 backdrop-blur-3xl shadow-[0_0_35px_rgba(124,58,237,.15)]"
        >
          <Sparkles
            size={17}
            className="text-violet-400"
          />

          <span className="text-slate-200">
            AI Powered Video Intelligence
          </span>

        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="mt-10 text-6xl font-black leading-tight text-white lg:text-7xl"
        >
          Analyze{" "}

          <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">

            Videos

          </span>

          <br />

          in Seconds.

        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400"
        >
          Upload any video and let VideoVerse automatically generate
          transcripts, summaries, timestamps, highlights and an AI
          chat assistant.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .45 }}
          className="mt-14 flex justify-center gap-6"
        >

          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 px-9 py-4 text-lg font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,.25)] transition-all duration-300 hover:scale-105"
          >
            Get Started

            <ArrowRight size={20} />
          </Link>

          <button
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#13172d]/80 px-9 py-4 text-lg font-semibold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-white/10"
          >
            <PlayCircle size={21} />

            Watch Demo

          </button>

        </motion.div>

      </div>

    </section>
  );
}