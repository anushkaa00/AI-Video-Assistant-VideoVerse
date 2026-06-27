import { motion } from "framer-motion";
import {
  Upload,
  Cpu,
  FileText,
  Sparkles,
  ListChecks,
  MessageCircleMore,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: " Upload Videos",
    description:
      "Paste a YouTube link or upload a local video to begin AI analysis in just a few clicks.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Cpu,
    title: " AI Processes Video",
    description:
     "Our AI analyzes the entire video, understands the context and extracts meaningful information.",

    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: FileText,
    title: " Generate Transcript ",
    description:
      "Automatically create an accurate transcript with speaker-aware text for easy reference.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: " Smart Summary",
    description:
      "Generate concise summaries with key takeaways, timestamps and important discussion points.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: ListChecks,
    title: " Highlights & Action Items",
    description:
       "Identify tasks, follow-ups and decisions automatically without manual note taking.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: MessageCircleMore,
    title: " Chat with AI",
    description:
      "Ask questions about the uploaded video and receive context-aware answers instantly.",
  },
];

export default function Features() {
  return (
    <section id="workflow" className="relative py-28 px-6 overflow-hidden">
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
            Working
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            How VideoVerse Works?
            
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            From upload to AI-powered insights, VideoVerse transforms long videos into structured, searchable knowledge in seconds.
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

      
      </div>
    </section>
  );
}