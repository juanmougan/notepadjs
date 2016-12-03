var express = require('express');
var notes_router = require('./routes/notes');
var health_router = require('./routes/health');

var app = express();

app.use('/notes', notes_router);
app.use('/health', health_router);

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

exports.closeServer = function() {
  var server = app.listen(process.env.PORT || 3000);
  server.close();
};
