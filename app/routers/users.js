import express from 'express';
const router = express.Router();

import * as usersController from '../controllers/usersController.js';

router.get('/', usersController.list);
router.post('/', usersController.processAdd);
router.get('/:id', usersController.getById);
router.put('/:id', usersController.processEdit);
router.delete('/:id', usersController.performDelete);

export default router;