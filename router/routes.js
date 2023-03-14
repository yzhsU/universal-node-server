const index = require('./index');

module.exports = async function (fastify) {
  fastify.register(index);
}