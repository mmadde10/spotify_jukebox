var express = require('express');
var router = express.Router();
var track_controller = require('../controllers/trackController');
const auth = require('../middleware/auth');


// Home page route.
router.get('/', function (req, res) {
    res.send('Track home page');
  })
  
  // About page route.
  router.get('/about', function (req, res) {
    res.send('About this wiki');
  })

  router.get('/track', auth, track_controller.track_detail_get);


  router.post('/search', auth, track_controller.track_search_post)
  
  module.exports = router;