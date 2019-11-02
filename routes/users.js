var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController')
const auth = require('../middleware/auth');

/* GET users listing. */
router.get('/', user_controller.index);

// POST request for creating user.
router.post('/signup', user_controller.user_create_post);

// POST request for auth user.
router.post('/signin', user_controller.user_signin_post);

router.get('/me', auth, async(req, res) => {
  // View logged in user profile
  res.send(req.user)
})

router.post('/me/logout', auth, user_controller.user_logout_post);


router.post('/me/logoutall', auth, user_controller.user_logout_all_post);

module.exports = router;
