/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // A sophisticated "Off-White" for the background
        light: "#fcfcfc",
        // A deep "Charcoal" instead of blue-black for text and cards
        dark: "#1a1a1a",
        // A "Cyber Lime" or "Burned Orange" for the creative spark
        // Let's go with a striking 'Electric Indigo-Violet' that isn't the default blue
        primary: "#6366f1",
        accent: "#ff4d00", // A punchy orange for small highlights/buttons
        surface: "#ffffff", // Pure white for cards
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        blink: { 'from, to': { opacity: '1' }, '50%': { opacity: '0' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' }, }
      }
    },
  },
  plugins: [],
};