const express = require('express');
const path = require('path');

const app = express();

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/users', usersRoutes);
app.use(homeRoutes);

app.listen(3000);