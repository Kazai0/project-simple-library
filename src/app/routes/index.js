import { Router } from 'express';

import User from './user';
import Session from './session';
import Admin from './admin';

const routes = new Router();
const BASE_PATH = `/${process.env.APP_VERSION_ROUTES}`;

routes.use(`${BASE_PATH}/users`, User);
routes.use(`${BASE_PATH}/sessions`, Session);
routes.use(`${BASE_PATH}/admin`, Admin);

export default routes;
