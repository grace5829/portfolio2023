/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        blob1a: "blob 7s infinite",
        blob1b: "blob 15s infinite",
        blob2a: "blob2 5s infinite",
        blob2b: "blob2 12s infinite",
        blob3a: "blob3 12s infinite",
        blob3b: "blob3 20s infinite",
        blob4a: "blob4 8s infinite",
        blob4b: "blob4 17s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(60px, -50px) scale(.8)",
          },
          "66%": {
            transform: "translate(-220px, 120px) scale(0.7)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-30px, 180px) scale(1.1)",
          },
          "66%": {
            transform: "translate(60px, -80px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob3: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-190px, -90px) scale(1.1)",
          },
          "66%": {
            transform: "translate(260px, -230px) scale(0.7)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob4: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -20px) scale(1.1)",
          },
          "55%": {
            transform: "translate(10px, -80px) scale(0.9)",
          },
          "66%": {
            transform: "translate(60px, -180px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
    }
  },
  plugins: [],
}
}