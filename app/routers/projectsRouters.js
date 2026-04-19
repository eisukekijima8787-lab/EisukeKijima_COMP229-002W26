var express = require('express');
var router = express.Router();

let authController = require('../controllers/authControllers');
let projectsController = require('../controllers/projectsControllers');

router.get('/', 
    authController.logToken, authController.validateToken,  
    projectsController.list);
router.post('/', 
    authController.validateToken, 
    projectsController.processAdd);
router.get('/:id', 
    authController.validateToken, 
    projectsController.getById);
router.put('/:id', 
    authController.validateToken, 
    projectsController.processEdit);
router.delete('/:id', 
    authController.validateToken, 
    projectsController.performDelete);

module.exports = router;