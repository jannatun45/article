/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#333",
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}", // sesuaikan dengan struktur project-mu
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
