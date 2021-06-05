import { Router } from 'express';

import controller from '../../controllers/AdminController';

import book from './book';
const admin = new Router();

admin.get('/index', controller.index);

admin.use('/:admin_id/books', book);

export default admin;
