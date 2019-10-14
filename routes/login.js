var express = require('express');
var router = express.Router();

// Home page route.
const login = router.get('/login', function (req, res) {
  res.render('login.ejs');
})

// About page route.
const signup = router.get('/signup', function (req, res) {
  res.render('signup.ejs');
})

const band = router.get('/band', function (req, res) {
  res.render('band.ejs');
})

module.exports = {
  login,
  signup,
  band
};