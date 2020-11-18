var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

router.get('/nootropicos', function(req, res, next) {
  res.render('nootropicos.ejs', { title: 'Nootropicos' });
});

router.get('/aminoacidos', function(req, res, next) {
  res.render('aminoacidos.ejs', { title: 'Aminoacidos' });
});

router.get('/pre-entreno', function(req, res, next) {
  res.render('pre-entreno', { title: 'Pre-entreno' });
});

router.get('/proteina', function(req, res, next) {
  res.render('proteina.ejs', { title: 'Proteina' });
});

router.get('/creatina', function(req, res, next) {
  res.render('creatina.ejs', { title: 'Creatina' });
});

module.exports = router;
