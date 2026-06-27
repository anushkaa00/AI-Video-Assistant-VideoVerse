import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  ListChecks,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: FileText,
    title: "Video Summary",
    description:
      "Generate concise AI-powered summaries so you can understand lengthy videos within seconds.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Clock3,
    title: "Key Highlights",
    description:
      "Automatically identify important moments, timestamps and major discussion points.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: ListChecks,
    title: "Action Items",
    description:
      "Extract tasks, decisions and follow-ups from videos without manual note taking.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: MessageSquare,
    title: "Chat with Video",
    description:
      "Ask natural language questions about any uploaded video and receive AI-generated answers.",
    gradient: "from-sky-500 to-cyan-500",
  },
];

export default function ResultsCard() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-xl">
            <Sparkles size={16} />
            AI Generated Results
          </div>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Everything You Need From
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Every Video
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            VideoVerse transforms long videos into structured knowledge with
            AI-generated summaries, timestamps, highlights, action items and an
            intelligent chat assistant.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/30"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-gradient-to-r ${card.gradient} p-4`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {card.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-medium text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Glass Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-20"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-white/5 to-cyan-500/10 p-10 backdrop-blur-3xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  AI Video Intelligence
                </h3>

                <p className="mt-5 text-slate-300 leading-8">
                  Upload your videos once and let VideoVerse automatically
                  generate transcripts, summaries, timestamps, action items,
                  highlights and contextual answers—saving hours of manual work.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Automatic AI summaries",
                  "Transcript generation",
                  "Timestamp detection",
                  "Important highlights",
                  "Action item extraction",
                  "Interactive AI chat",
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}