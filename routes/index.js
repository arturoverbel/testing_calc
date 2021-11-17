var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/suma/:num1/:num2', function(req, res, next) {
  result = Number(req.params.num1) + Number(req.params.num2)

  res.send('Suma: ' + result);
});

module.exports = router;
