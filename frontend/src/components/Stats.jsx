import { motion } from "framer-motion";
import { Brain, FileText, MessageSquareText, Clock } from "lucide-react";

const stats = [
  {
    icon: Brain,
    value: "99%",
    label: "AI Accuracy",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: FileText,
    value: "10x",
    label: "Faster Summaries",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: MessageSquareText,
    value: "24/7",
    label: "Video Chat",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: Clock,
    value: "<30s",
    label: "Average Processing",
    color: "from-sky-500 to-cyan-500",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div
                className={`mb-5 inline-flex rounded-xl bg-gradient-to-r ${item.color} p-3`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-4xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-400">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}