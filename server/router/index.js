const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 4, max: 12 }),
    body('firstName').isLength({ min: 2, max: 30 }),
    body('lastName').isLength({ min: 2, max: 30 }),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;
