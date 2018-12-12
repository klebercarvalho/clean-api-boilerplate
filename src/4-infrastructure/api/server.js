import Koa from 'koa';

export default class Server {
  constructor({
    config,
    router,
  }) {
    this.config = config;
    this.service = new Koa();
    this.service
      .use(router.routes());
  }

  start() {
    return new Promise((resolve) => {
      this.service
        .listen(this.config.PORT, () => {
          console.log(`> Service is running on port ${this.config.PORT}`);
          resolve();
        });
    });
  }
}
