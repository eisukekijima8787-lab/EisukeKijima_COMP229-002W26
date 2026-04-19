var express = require('express');
var router = express.Router();

let authController = require('../controllers/authControllers');
let contactsController = require('../controllers/contactsControllers');

router.get('/', 
    authController.logToken, authController.validateToken,  
    contactsController.list);
router.post('/', 
    authController.validateToken, 
    contactsController.processAdd);
router.get('/:id', 
    authController.validateToken, 
    contactsController.getById);
router.put('/:id', 
    authController.validateToken, 
    contactsController.processEdit);
router.delete('/:id', 
    authController.validateToken, 
    contactsController.performDelete);

module.exports = router;