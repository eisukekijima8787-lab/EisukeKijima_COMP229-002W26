import express from 'express';
const router = express.Router();

import * as referencesController from '../controllers/referencesController.js';

router.get('/', referencesController.list);
router.post('/', referencesController.processAdd);
router.get('/:id', referencesController.getById);
router.put('/:id', referencesController.processEdit);
router.delete('/:id', referencesController.performDelete);

export default router;