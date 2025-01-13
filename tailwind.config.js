import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            xaibg: '#000000',
            surface50: '#E0E0E0',
            surf2: '#f5f5f5',
            surf3: '#e5e5e5',
            surface400: '#A0A0A0',
            surface600: '#808080',
            surf7: '#404040',
            surface900: '#1A1A1A',
            surface950: '#121212',
            x950: '#000000',
            x400: '#B0B0B0',
            surf8: '#262626',
            'regal-blue': '#243c5a',

            'ac': {
               50: '#eef2ff',
               100: '#e0e7ff',
               200: '#c7d2fe',
               300: '#a5b4fc',
               400: '#818cf8',
               500: '#6366f1',
               600: '#4f46e5',
               700: '#4338ca',
               800: '#3730a3',
               900: '#312e81',
               950: '#1e1b4b',
             },
          },
          boxShadow: {
            'xai-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          borderWidth: {
            '1': '1px',
          },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
