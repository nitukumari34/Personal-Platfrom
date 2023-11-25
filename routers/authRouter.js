const router = require('express').Router();
const authController = require('../controller/authController');


router.post('/signup', authController.signupController);
router.post('/login', authController.loginController);
router.get("/refresh", authController.refreshAccessTokenController);
router.post("/logout", authController.lagoutController);


module.exports = router;