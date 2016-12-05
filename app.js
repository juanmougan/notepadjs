var express = require('express');
var notes_router = require('./routes/notes');

var app = express();

// TODO move this elsewhere
var mongoose   = require('mongoose');
// var connect = mongoose.connect('mongodb://localhost:27017/notepadjs');
mongoose.connect('mongodb://localhost:27017/notepadjs');
var db = mongoose.connection;
// db.on('disconnect', connect); // auto reconnecting
db.on('error', function(err) {
    debug('connection error:', err);
});
// module.exports = db;

// Models
var Note = require('./models/note');

// Routes
app.use('/notes', notes_router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("404 error")
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ error: err.message }));
});

module.exports = app;
