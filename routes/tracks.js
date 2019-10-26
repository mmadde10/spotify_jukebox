var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    res.send('Track home page');
  })
  
  // About page route.
  router.get('/about', function (req, res) {
    res.send('About this wiki');
  })

  router.get('/search', function (req, res) {
    res.send('Get 10 search items');
  })
  
  module.exports = router;