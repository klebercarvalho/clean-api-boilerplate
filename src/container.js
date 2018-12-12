import {
  createContainer,
  Lifetime,
  asFunction,
  asValue,
  asClass,
} from 'awilix';

import { scopePerRequest } from 'awilix-koa';

import Application from './2-application';
import logger from './4-infrastructure/logger';
import Server from './4-infrastructure/api/server';
import router from './4-infrastructure/api/router';
import config from './config';

import {
/* models */
} from './4-infrastructure/database/models';

const container = createContainer();

const registerSystem = {
  app: asClass(Application, { lifetime: Lifetime.SINGLETON }),
  server: asClass(Server, { lifetime: Lifetime.SINGLETON }),
  router: asFunction(router, { lifetime: Lifetime.SINGLETON }),
  logger: asValue(logger, { lifetime: Lifetime.SINGLETON }),
  config: asValue(config, { lifetime: Lifetime.SINGLETON }),
};

const registerDatabase = {
  /* database */
};

const registerMiddlewares = {
  containerMiddleware: asValue(scopePerRequest(container)),
};

const registerRepositories = {
  /* repositories */
};

const registerUseCases = {
  /* use cases */
};

const registerApplicationServices = {
  /* application services */
};

container.register({
  ...registerSystem,
  ...registerDatabase,
  ...registerMiddlewares,
  ...registerRepositories,
  ...registerUseCases,
  ...registerApplicationServices,
});

export default container;
