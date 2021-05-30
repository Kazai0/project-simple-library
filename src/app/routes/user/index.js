import { Router } from 'express';

import controller from '../../controllers/UserController';

const user = new Router();

user.post('/', controller.create);

export default user;
