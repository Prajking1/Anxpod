/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tron Legacy brand colors
        primary: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99ccff',
          300: '#66b3ff',
          400: '#3399ff',
          500: '#1F6BFF', // Primary Blue
          600: '#0052e6',
          700: '#003db3',
          800: '#002980',
          900: '#00144d',
          950: '#000a1a',
        },
        // Quick access tokens - Tron theme
        tronPrimary: '#1F6BFF',
        tronAccent: '#00E5FF',
        tronLink: '#66E6FF',
        tronCyan: '#00FFFF',
        // Surfaces
        tronCanvas: '#000000',
        tronSurface1: '#0B0F14',
        tronSurface2: '#0E1726',
        tronSurface3: '#111827',
        // Borders
        tronBorder: '#1E293B',
        tronBorderStrong: '#23324A',
        tronFocusOuter: '#00FFFF',
        tronFocusInner: '#1F6BFF',
        // Text
        tronTextPrimary: '#F8FAFC',
        tronTextSecondary: '#A7B1C2',
        tronTextMuted: '#7C8AA5',
        // Semantic colors
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#06B6D4',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',   // 8px
        'sm': '0.75rem',  // 12px
        'md': '1rem',     // 16px
        'lg': '1.5rem',   // 24px
        'xl': '2rem',     // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
      },
      fontSize: {
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],     // 12px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],    // 14px  
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],           // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],    // 18px
        'heading-xs': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }], // 14px
        'heading-sm': ['1rem', { lineHeight: '1.4', fontWeight: '600' }],     // 16px
        'heading-md': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }], // 18px
        'heading-lg': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],  // 20px
        'heading-xl': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],   // 24px
        'heading-2xl': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],    // 32px
        'heading-3xl': ['2.5rem', { lineHeight: '1.1', fontWeight: '800' }],  // 40px
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #0000FF 0%, #00FFFF 100%)',
        'tron-gradient': 'linear-gradient(180deg, #1F6BFF 0%, #00E5FF 100%)',
        'ambient-gradient': 'radial-gradient(circle, rgba(0,255,255,0.18) 0%, rgba(0,255,255,0.00) 60%)',
      },
      boxShadow: {
        'tron-shadow-1': '0 4px 16px rgba(0,0,0,0.6)',
        'tron-shadow-2': '0 6px 24px rgba(0,0,0,0.6)',
        'tron-shadow-3': '0 10px 40px rgba(0,0,0,0.55)',
        'tron-focus': '0 0 0 2px #00FFFF, 0 0 0 3px #1F6BFF',
      }
    },
  },
  plugins: [],
};
