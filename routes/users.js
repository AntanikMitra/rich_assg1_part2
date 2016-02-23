/* Author: Antanik Mitra
   WebApp: Assignment 1 part 1
   Date 15/02/2016
 */


/* installing or route to express package */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
