import { motion } from "framer-motion";
import { Brain, MessageSquareText, FileText, Sparkles } from "lucide-react";
import GlassCard from "./common/GlassCard";
import Badge from "./common/Badge";
import SectionHeading from "./common/SectionHeading";

const features = [
  {
    icon: Brain,
    title: "AI Video Intelligence",
    description:
      "Advanced AI analyzes your uploaded videos to generate accurate summaries, transcripts, key highlights and actionable insights."
  },
  {
    icon: FileText,
    title: "Instant Summaries",
    description:
      "Save time by automatically generating concise video summaries instead of watching long recordings."
  },
  {
    icon: MessageSquareText,
    title: "Chat with Videos",
    description:
      "Ask questions about your uploaded videos using natural language and receive context-aware answers."
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center mb-4">
          <Badge>
            <Sparkles size={14} />
            About VideoVerse
          </Badge>
        </div>

        <SectionHeading
          title="Transform Videos into Actionable Knowledge"
          subtitle="VideoVerse uses modern AI models to understand your videos, generate intelligent summaries, extract key moments, and let you interact with your content through an AI-powered chat interface."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <GlassCard className="h-full p-8">

                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 p-4">

                    <Icon className="h-7 w-7 text-white" />

                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {item.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

        

      </div>
    </section>
  );
}