const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
const ejs = require('ejs');
const path = require('path');

//Express app
var app = express();
//Initializing Port
var port = process.env.PORT || 8000;


// ****** Product Routes****** 
const productRoute = require('./routes/product/productRoutes')
const brandRoute = require('./routes/product/brandRoutes');
const categoryRoute = require('./routes/product/categoryRoutes');
const departmentRoute = require('./routes/product/departmentRoutes');

// Configuring database
var configDb = require('./config/db');
const mongoose = require('mongoose');

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

// parse requests of content-type - application/json
app.use(bodyParser.json()); 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//*** uploading file/image *****/
//Set Storage Engine
var storage = multer.diskStorage({
  destination: './public',
  filename: function (req, file, cb) {
      cb(null , Date.now() + '-' + file.originalname);
  }
});
//Init upload
var upload = multer({ storage: storage}).single('myImage')

   // Set view engine
app.set('view engine', 'ejs')
// Set static folder
app.use(express.static('./public'));
// Set the initial route
app.get('/', (req, res) => {
    res.render('index');
})
  
app.post('/upload', (req, res) => {
  upload (req,res, (err) => {
    if(err){
      res.render('index', {msg: err})
    }else{
        if(req.file == undefined){
          res.render('index', {msg: 'No file selected'})
        }
        else{
          res.render('index', {
            msg: 'File uploaded successfully!',
            file: 'public/${req.file.filename}'
          })
          console.log('File uploaded successfully!')
        }
      }
    })
  });


  // *****  Using Routes  ******
  //Product Module Routes
  app.use('/api/product', productRoute);
  app.use('/api/brand', brandRoute); 
  app.use('/api/category', categoryRoute);
  app.use('/api/department', departmentRoute);


  
  app.listen(port);
  console.log('The magic happens on port ' + port);