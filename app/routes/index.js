var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var language = req.cookies.language || 'en';
  var title = language === 'de' ? 'Willkommen' : 'Welcome';
  res.render('index', { title: title });
});

module.exports = router;
