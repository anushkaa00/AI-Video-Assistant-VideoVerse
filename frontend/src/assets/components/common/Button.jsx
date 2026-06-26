import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        via-indigo-600
        to-cyan-500
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        shadow-violet-500/20
        transition-all
        duration-300
        hover:shadow-cyan-500/30
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}