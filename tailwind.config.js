/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-teal' : '#363E40',
      'teal' : '#2c3639',
      'mid-teal' : '#303C40',
      'light-teal' : '#3F4E4F',
      'bright-teal' : '#00FFA3',
      'ligh-brown' : '#A27B5C',
      'peach' : '#DCD7C9',
      'red' : '#dc2626',
      'green' : '#16a34a',
      'blue' : '#2563eb',
      'white' : '#ffffff',
      'grey': '#6b7280',
      'dark-grey' : '#717171',
      'night' :'#5C2887',
      'day' : '#E0E023',
      'black' : "#000000",
      "day-navbar" : "#6C7B4F",
      "day-pink-bg" : "#FBF0F0",
      "day-pink-accent" : "#ECDADA",
      "day-gray" : "#D7D7D7",
      "day-text" : "#333232",
      "day-green-accent" : "#A4C567",
      "day-green-quote" : "#BEC6B6"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
