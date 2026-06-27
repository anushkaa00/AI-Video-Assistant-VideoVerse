import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  Sparkles,
  MessageSquareText,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload Videos",
    description:
      "Upload recordings in just a few clicks. VideoVerse securely processes your videos using AI.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: FileText,
    title: "Automatic Transcript",
    description:
      "Generate accurate transcripts instantly without spending hours writing notes manually.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "AI Summary",
    description:
      "Receive concise summaries highlighting only the most important parts of every video.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquareText,
    title: "Chat with Video",
    description:
      "Ask questions in natural language and let AI answer directly from your uploaded videos.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Clock3,
    title: "Key Moments",
    description:
      "Automatically detect timestamps, highlights and important discussion points.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Processing",
    description:
      "Your uploaded videos are processed securely with a modern backend architecture.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Everything Needed For
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Video Intelligence
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Powerful AI tools designed to transform long videos into searchable,
            actionable knowledge.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/30"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-gradient-to-r ${feature.gradient} p-4`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-4 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-white/5 to-cyan-500/10 p-10 backdrop-blur-3xl"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Why Choose VideoVerse?
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Stop spending hours watching lengthy recordings. VideoVerse
                automatically understands your videos and provides summaries,
                transcripts, highlights and intelligent answers within seconds.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "AI Powered Analysis",
                "Video Summaries",
                "Accurate Transcripts",
                "Action Item Detection",
                "Timestamp Highlights",
                "Chat with Videos",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}