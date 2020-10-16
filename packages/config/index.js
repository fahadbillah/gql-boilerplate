const dev = require('./dev.js');
const production = require('./production.js');

let env;

switch (process.env.NODE_ENV) {
  case 'production':
    env = production;
    break;

  default:
    env = dev;
    break;
}

module.exports = env;