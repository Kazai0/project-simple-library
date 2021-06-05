import { Router } from 'express';
import auth from '../../../middlewares/auth';

import controller from '../../../controllers/BookControllers';

const book = new Router({ mergeParams: true });

book.post('/', auth, controller.create);

export default book;
