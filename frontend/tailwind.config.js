/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0a0f',
          raised: '#111118',
          overlay: '#16161f',
        },
        charcoal: {
          DEFAULT: '#1a1a24',
          light: '#252532',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          glow: '#6366f1',
        },
        glass: {
          border: 'rgba(255, 255, 255, 0.08)',
          bg: 'rgba(255, 255, 255, 0.04)',
          hover: 'rgba(255, 255, 255, 0.07)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent)',
        'mesh-gradient':
          'radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(99, 102, 241, 0.1) 0px, transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(99, 102, 241, 0.15)',
        'glow-lg': '0 0 80px rgba(99, 102, 241, 0.2)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
        elevated: '0 20px 40px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
