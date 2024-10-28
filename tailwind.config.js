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
              50: "#e2f6ff",
              100: "#c6dfea",
              200: "#a7cad7",
              300: "#85b3c5",
              400: "#659db3",
              500: "#4c849a",
              600: "#396779",
              700: "#264957",
              800: "#112d36",
              900: "#001217",
              foreground: "#303131",
              DEFAULT: "#4c849a",
            },
          },
        }
      },
    }),
  ],
}
