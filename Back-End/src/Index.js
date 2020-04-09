const express = require('express');
const routes = require('./rotes');

const app = express();

app.use(routes);


app.listen(3333);