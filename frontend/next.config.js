const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    server: isProd ? 'https://miyazakiofficeapp.herokuapp.com' : 'http://localhost:3000',
  },
}
