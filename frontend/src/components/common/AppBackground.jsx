export default function AppBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

      {/* Base */}

      <div className="absolute inset-0 bg-[#050816]" />

      {/* Main center gradient */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 30%, rgba(99,102,241,.14) 0%, transparent 38%),
            radial-gradient(circle at 15% 80%, rgba(124,58,237,.10) 0%, transparent 32%),
            radial-gradient(circle at 85% 20%, rgba(34,211,238,.08) 0%, transparent 28%),
            linear-gradient(180deg,#050816 0%,#040510 45%,#03040D 100%)
          `,
        }}
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.18) .7px, transparent .7px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}