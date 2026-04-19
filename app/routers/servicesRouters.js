var express = require('express');
var router = express.Router();

let authController = require('../controllers/authControllers');
let servicesController = require('../controllers/servicesControllers');

router.get('/', 
    authController.logToken, authController.validateToken,  
    servicesController.list);
router.post('/', 
    authController.validateToken, 
    servicesController.processAdd);
router.get('/:id', 
    authController.validateToken, 
    servicesController.getById);
router.put('/:id', 
    authController.validateToken, 
    servicesController.processEdit);
router.delete('/:id', 
    authController.validateToken, 
    servicesController.performDelete);

module.exports = router;