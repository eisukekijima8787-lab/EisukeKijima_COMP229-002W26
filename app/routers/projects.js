import express from 'express';
const router = express.Router();

import * as projectsController from '../controllers/projectsController.js';

router.get('/', projectsController.list);
router.post('/', projectsController.processAdd);
router.get('/:id', projectsController.getById);
router.put('/:id', projectsController.processEdit);
router.delete('/:id', projectsController.performDelete);

export default router;