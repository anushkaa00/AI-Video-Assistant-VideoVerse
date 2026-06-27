export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}