module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      minWidth: {
        '72': '18rem', /* 288px */
        '80': '20rem', /* 320px */
        '96': '24rem', /* 384px */
      }
    }
  }
}