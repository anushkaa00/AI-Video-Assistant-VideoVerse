import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[150px]" />

        <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
              <Sparkles size={16} />

              AI Powered Video Intelligence
            </div>

            <h1 className="text-6xl font-black leading-tight text-white lg:text-7xl">
              Analyze
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Videos
              </span>

              in Seconds.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Upload any video and let VideoVerse automatically generate
              transcripts, summaries, timestamps, highlights and an AI chat
              assistant.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/dashboard"
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Get Started

                <ArrowRight size={18}/>
              </Link>

              <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white transition hover:bg-white/10">

                <PlayCircle size={20}/>

                Watch Demo

              </button>

            </div>

            <div className="mt-14 flex gap-12">

              <div>

                <h2 className="text-4xl font-black text-white">
                  10x
                </h2>

                <p className="text-slate-400">
                  Faster Analysis
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-white">
                  AI
                </h2>

                <p className="text-slate-400">
                  Powered
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-white">
                  24/7
                </h2>

                <p className="text-slate-400">
                  Available
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity:0,
              x:50
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:.7
            }}
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-3xl">

              <div className="mb-6 flex gap-2">

                <div className="h-3 w-3 rounded-full bg-red-400"/>

                <div className="h-3 w-3 rounded-full bg-yellow-400"/>

                <div className="h-3 w-3 rounded-full bg-green-400"/>

              </div>

              <div className="rounded-2xl bg-[#0d1227] p-6">

                <div className="mb-6 flex items-center justify-between">

                  <h3 className="font-bold text-white">
                    Video Analysis
                  </h3>

                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                    Processing
                  </span>

                </div>

                <div className="space-y-5">

                  <div>

                    <div className="mb-2 flex justify-between">

                      <span className="text-slate-400">
                        Transcript
                      </span>

                      <span className="text-cyan-400">
                        100%
                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-700">

                      <div className="h-full w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"/>

                    </div>

                  </div>

                  <div>

                    <div className="mb-2 flex justify-between">

                      <span className="text-slate-400">
                        Summary
                      </span>

                      <span className="text-cyan-400">
                        Ready
                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-700">

                      <div className="h-full w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"/>

                    </div>

                  </div>

                  <div>

                    <div className="mb-2 flex justify-between">

                      <span className="text-slate-400">
                        AI Chat
                      </span>

                      <span className="text-cyan-400">
                        Active
                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-700">

                      <div className="h-full w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"/>

                    </div>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

                  <p className="font-semibold text-white">
                    AI Summary
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    This video discusses project milestones, upcoming tasks,
                    deadlines and important action items identified using AI.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}