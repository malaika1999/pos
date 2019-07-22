const express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var configDb = require('./config/db');
const mongoose = require('mongoose');

mongoose.connect(configDb.url, {
    useNewUrlParser:true
})
.then(() => {
    console.log("successfully connected to database");
}).catch(err => {
    console.log("couldn't connect to database",err);
    process.exit();
});

app.use(bodyParser.json()); // get information from html forms
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
  });

  app.get('/', function(req,res){
      res.send("heyy")
  })

  app.listen(port);
  console.log('The magic happens on port ' + port);