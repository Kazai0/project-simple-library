import { Router } from 'express';
import auth from '../../../middlewares/auth';

import controller from '../../../controllers/RentController';

const rent = new Router({ mergeParams: true });

rent.post('/', auth, controller.create);

export default rent;
