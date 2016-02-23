/* Author: Antanik Mitra
   WebApp: Assignment 1 part 1
   Date 15/02/2016
 */


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Home" });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: "About" });
});
/* GET project */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: "Projects"});
});

/* GET services. */
router.get('/services', function(req, res, next) {
  res.render('services', {title: "Services"});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: "Contact"});
});

module.exports = router;
