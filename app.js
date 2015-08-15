var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var initPassport = require('./passport/init');
var topics = {};




var dbConfig = require('./db');
var mongoose = require('mongoose');

// Connect to DB
mongoose.connect(dbConfig.url);

var app = express();

// view engine setup
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuring Passport
app.use(expressSession({ secret: 'mySecretKey' }));
app.use(passport.initialize());
app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
app.use(flash());

// Initialize Passport
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;

var server = app.listen(app.get('port'), ip, function () {
    console.log(("Express server listening on port " + app.get('port')))
});

var io = require('socket.io').listen(server); // this tells socket.io to use our express server

var Topic = require('./models/topic');

io.sockets.on('connection', function (socket) {
    console.log('A new user connected!');

    Topic.find().exec(function (err, topics) {
        if (err) {
            return console.log('find topics error:', err);
        }
        else {
            console.log(topics[0].topicname);
            socket.emit('topics', topics);
        }
    });

    socket.on('new rating', function () {
        setTimeout(function () {
            updateRatings();
        }, 100);
    });

    function updateRatings() {
        Topic.find().exec(function (err, topics) {
            if (err) {
                return console.log('find topics error:', err);
            }
            else {
                console.log(topics[0].topicname);
                io.sockets.emit('ratings', topics);
            }
        });


    }
    socket.emit('info', { msg: 'The world is round, there is no up or down.' });


});
