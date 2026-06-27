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
    title: "Chat",
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
            What You'll Get
          </div>

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

        
      </div>
    </section>
  );
}