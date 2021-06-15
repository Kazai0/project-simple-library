import { Router } from 'express';

import controller from '../../controllers/UserController';
import rent from './rents';

const user = new Router();

user.post('/', controller.create);

user.use('/:user_id/rent', rent);

export default user;
