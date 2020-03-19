require("dotenv").config();
require("./db");

const User = require('./db').User;
const Product = require("./db").Product;
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes/index");
const passport = require('passport');
const session = require("express-session");
const flash = require('connect-flash');

const app = express();




app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(session({ secret: 'bacon and eggs' }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
})

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
