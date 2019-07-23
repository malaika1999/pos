const express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var configDb = require('./config/db');
const mongoose = require('mongoose');

// ****** Product Routes****** 
const productRoute = require('./routes/product/productRoutes')
const brandRoute = require('./routes/product/brandRoutes');
const categoryRoute = require('./routes/product/categoryRoutes');
const departmentRoute = require('./routes/product/departmentRoutes');

// **** Connecting Database *****
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

//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.json({ error : err });
//   });

  // *****  Using Routes  ******
  //Product Module Routes
  app.use('/api/product', productRoute);
  app.use('/api/brand', brandRoute); 
  app.use('/api/category', categoryRoute);
  app.use('/api/department', departmentRoute);


  
  app.listen(port);
  console.log('The magic happens on port ' + port);