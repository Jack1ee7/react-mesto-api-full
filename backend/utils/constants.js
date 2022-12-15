const REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)$/;

const CORS = {
  origin: [
    'http://localhost:3001',
    'https://mesto.jack1ee7.nomoredomains.club',
    'http://mesto.jack1ee7.nomoredomains.club',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = { REGEX, CORS };
