import getRoutes from './routes';

const router = ({
  config,
  containerMiddleware,
}) => {
  const appRouter = getRoutes();

  if (config.NODE_ENV === 'development') {
    /* Non-production middlewares */
  }

  appRouter
    .use(containerMiddleware);

  return appRouter;
};

export default router;
