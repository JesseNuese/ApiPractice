var express = require('express');
var logger = require('morgan')('dev');
var request = require('request');
var routes = require('./routes.js')

var PORT = process.env.PORT || 1337;

var app = express();

app.use(logger);

routes(app);

app.listen(PORT, (error) => {
  if(error){
    console.log('Server error', error);
  } else {
    console.log('Server started on port: ', PORT);
  }

});
