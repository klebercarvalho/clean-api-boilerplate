import Router from 'koa-router';

import TestController from '../../3-interfaces/controllers/testController';

const getRoutes = () => {
  const router = Router();

  router.use('/test', TestController.routes);

  return router;
};

export default getRoutes;
