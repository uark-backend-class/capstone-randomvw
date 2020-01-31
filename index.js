const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(routes);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));