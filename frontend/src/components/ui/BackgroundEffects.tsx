import { motion } from 'framer-motion'

const orbs = [
  {
    className: 'top-[10%] left-[5%] h-72 w-72 bg-accent-purple/10',
    animate: { x: [0, 30, 0], y: [0, -20, 0] },
    duration: 18,
  },
  {
    className: 'top-[40%] right-[8%] h-96 w-96 bg-accent-blue/8',
    animate: { x: [0, -40, 0], y: [0, 30, 0] },
    duration: 22,
  },
  {
    className: 'bottom-[15%] left-[20%] h-64 w-64 bg-accent-glow/8',
    animate: { x: [0, 20, 0], y: [0, 25, 0] },
    duration: 20,
  },
  {
    className: 'top-[60%] right-[25%] h-48 w-48 bg-accent-purple/6',
    animate: { x: [0, -15, 0], y: [0, -15, 0] },
    duration: 16,
  },
]

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: i % 3 === 0 ? 2 : 1,
  delay: (i * 0.4) % 6,
  duration: 4 + (i % 5),
}))

export function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#030305]" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${orb.className}`}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/40 to-[#030305]" />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -8, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030305_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.04)_0%,transparent_50%)]" />
    </div>
  )
}
