const User = require('../db').User;
const passport = require('passport');

exports.registerPage = (req, res) => res.render('register');