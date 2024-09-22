var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/Toptracer-range', function(req, res, next) {
  res.render('Toptracer-range');
});

router.get('/Advanture-golf', function(req, res, next) {
  res.render('Advanture-golf');
});

router.get('/Coffee', function(req, res, next) {
  res.render('Coffee');
});

router.get('/Golf-lessons', function(req, res, next) {
  res.render('Golf-lessons');
});

router.get('/leagues', function(req, res,next){
  res.render('leagues')
})

module.exports = router;
