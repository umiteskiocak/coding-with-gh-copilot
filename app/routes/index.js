var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET support page. */
router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Support' });
});

module.exports = router;
