const router = require('express').Router();
const userController = require('../controllers/user.controller');

//TO REGISTER A NEW USER
router.post('/register', userController.register);

//TO LOGIN THE USER
router.post('/login', userController.login);

module.exports = router;
