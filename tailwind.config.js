
module.exports = {
  mode: 'jit',
  content: ["./dist/index.html"],
  darkMode:'class',
  purge: [
    './dist/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}