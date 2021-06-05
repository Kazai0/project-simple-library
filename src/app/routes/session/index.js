import { Router } from 'express';

import controller from '../../controllers/SessionController';

const session = new Router();

session.post('/', controller.store);

export default session;
