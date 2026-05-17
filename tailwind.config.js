/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#09090B',
        darker: '#050507',
        primary: '#0EA5E9',     /* Cyber Blue */
        secondary: '#8B5CF6',   /* Purple */
        accent: '#10B981',      /* Success Green */
        cyber: '#0EA5E9',       /* Cyber Blue */
        success: '#10B981',     /* Neon Success Green */
        amber: '#F59E0B',       /* Amber Active State */
        light: '#F3F4F6',
        muted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        micro: '-0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'pipeline-flow': 'pipelineFlow 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(14, 165, 233, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)' },
        },
        pipelineFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
