import express from 'express';
const router = express.Router();

import * as servicesController from '../controllers/servicesController.js';

router.get('/', servicesController.list);
router.post('/', servicesController.processAdd);
router.get('/:id', servicesController.getById);
router.put('/:id', servicesController.processEdit);
router.delete('/:id', servicesController.performDelete);

export default router;