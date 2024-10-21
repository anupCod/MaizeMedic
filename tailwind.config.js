// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Include all relevant file types
    './public/**/*.html',               // Include HTML files in the public folder
  ],
  theme: {
    extend: {
      colors:{
        primary:'#3BAC33',
        secondary:'#bcbcbc',
      },
      boxShadow: {
        'neumorphism': '1px 1px 3px #bebebe, -1px -1px 3px #bebebe',
      },
    },
  },
  plugins: [],
}
