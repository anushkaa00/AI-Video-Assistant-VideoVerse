import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <span className="mb-5 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}