module.exports = {
  reactStrictMode: true,
  env: {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret,
    grant_type: 'client_credentials',
    Authorization: process.env.Authorization
  },
}
