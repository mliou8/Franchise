var express = require('express');
var app = express();
var passport = require('passport');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var swig = require('swig');
module.exports = app;

//Allow retrieval of static filters
app.set('views', path.join(__dirname, './frontend/views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use('/users', require('./server/app/routes/users.js'));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());


app.use('/newuser', require('./server/app/routes/newuser.js'));
app.get('/', function (req, res) {
   res.render('index');
});

app.get('/home', function (req, res) {
	res.render('layout');
});
app.get('/login', function (req, res) {
	res.render('login');
});
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});
