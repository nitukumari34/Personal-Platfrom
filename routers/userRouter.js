const router = require('express').Router();
const userController = require('../controller/userController');
const requireUser = require('../middlewares/requireUser');

router.post('/follow', requireUser, userController.followOrUnfollowUserController);
router.get('/getPostsOfFollowing', requireUser, userController.getPostsOfFollowing);

module.exports = router;