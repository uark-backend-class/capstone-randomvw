require('dotenv').config();
require('./db');


const Product = require('./db').Product;
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/index');
const sessioni = require('express-session');
const app = express();



// app.use(express.urlencoded({ extended: true }));
// app.use(routes);




app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');



app.use(express.urlencoded({ extended: true }));
app.use(routes);



const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));