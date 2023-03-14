const path = require('path');
const routes = require('./router/routes');
const fastifyCompress = require('fastify-compress');
const fastify = require('fastify')({ logger: { level: 'debug' } });

//라우터 등록
fastify
  //라우터파일 추가
  .register(routes)
  //compress 플러그인
  .register(fastifyCompress)
  //서버실행
  .listen({ port: 3000 }, (err, address) => {
    if (err) throw err;
    console.log(`Server listening on ${address}`);
  });