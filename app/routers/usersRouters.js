var express = require('express');
var router = express.Router();

let authController = require('../controllers/authControllers');
let usersController = require('../controllers/usersControllers');

router.get('/', 
    authController.logToken, authController.validateToken,  
    usersController.list);
router.post('/', 
    authController.validateToken, 
    usersController.processAdd);
router.get('/:id', 
    authController.validateToken, 
    usersController.getById);
router.put('/:id', 
    authController.validateToken, 
    usersController.processEdit);
router.delete('/:id', 
    authController.validateToken, 
    usersController.performDelete);

module.exports = router;