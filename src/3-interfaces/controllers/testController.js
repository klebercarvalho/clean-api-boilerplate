import Router from 'koa-router';

const TestController = {
  get routes() {
    const router = Router();

    router.get('/', this.sayHello);

    return router.routes();
  },

  async sayHello(ctx) {
    ctx.body = 'Hello world';
  },
};

export default TestController;
