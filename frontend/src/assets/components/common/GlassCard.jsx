export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-2xl
        shadow-black/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}