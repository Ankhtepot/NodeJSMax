const express = require('express');

const app = express();

app.use( (req, res, next) => {
    console.log('First middleware.');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('second middleware: users');
    res.send('<h1>USERS</h1>');
});

app.use('/', (req, res, next) => {
    console.log('second middleware: home page');
    res.send('<h1>Home page.</h1>')
});

app.listen(3010);