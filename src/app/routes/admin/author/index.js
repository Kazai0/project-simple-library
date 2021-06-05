import { Router } from 'express';

import controller from '../../../controllers/AuthorControllers';

const author = new Router();

author.post('/', controller.create);

export default author;
