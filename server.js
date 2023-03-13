const path = require('path');
const fastify = require('fastify')();

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public햣 '),
    prefix: '/', // 클라이언트에서 접근할 URL prefix
  });

// 라우터 등록
fastify.register(require('./router'));

// 서버 실행
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err;
    console.log(`Server listening on ${address}`);
  });