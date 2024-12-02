import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        bgFade: {
          '0%': { backgroundColor: "#a7cad7" },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        'bg-fade': 'bgFade .5s ease-in-out',
      },
      fontFamily: {
        sans: ["Josefin Sans"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#EEF7FF",
            foreground: "#252525",
            primary: {
              50: "#e5f1ff",
              100: "#b3d4ff",
              200: "#80b7ff",
              300: "#4d9aff",
              400: "#1a7dff",
              500: "#0063e6",
              600: "#004db3",
              700: "#003780",
              800: "#00214d",
              900: "#000b1a",
              foreground: "#303131",
              DEFAULT: "#0063e6",
            },
          },
        }
      },
    }),
  ],
}
