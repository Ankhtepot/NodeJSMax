const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const users = ['User1','User2','User3'];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home', path: '/' });
})

app.post('/users', (req, res) => {
    users.push(req.body.user);
    res.redirect('/users');
})

app.get('/users', (req, res) => {
    res.render('users', { pageTitle: 'Users', path: '/users', users});
})

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found'});
});

app.listen(3000);