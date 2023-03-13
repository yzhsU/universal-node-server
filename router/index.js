const IndexController = require('../controllers/IndexController');

function router(fastify, options, done) {
  // 루트 경로에 대한 GET 요청 처리
  fastify.get('/index', IndexController.index);
  done();
}

module.exports = router;