const express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
const ejs = require("ejs");
const path = require("path");
var passport = require('passport')
var morgan = require('morgan')
var cookieParser = require('cookie-parser')
var session = require('express-session')

//Express app
var app = express();
//Initializing Port
var port = process.env.PORT || 8000;

// ****** Product Routes******
const productRoute = require("./routes/product/product/index");
const brandRoute = require("./routes/product/brand/index");
const categoryRoute = require("./routes/product/category/index");
const departmentRoute = require("./routes/product/department/index");
// ***** Employee Routes *******
// var employeeRoute  = require('./routes/employee/index');
//***** Customer Routes ****
const customerRoute = require("./routes/customer/index");
//*****Store Routes *****/
const storeRoute = require("./routes/store/index");
//******Store Product Routes *****/
const storeProductRoute = require("./routes/storeProduct/index");
//******Sales Order Routes *******/
const salesOrderRoute = require("./routes/sales/index");
//******Sales Return Routes *****/
const salesReturnRoute = require("./routes/return/index");
//*******Waste Routes *******/
const wasteProductRoute = require("./routes/waste/index");
const authRoute = require("./routes/employee/index")



// Configuring database
var configDb = require("./config/db");
const mongoose = require("mongoose");

// **** Connecting Database *****
mongoose
  .connect(configDb.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch(err => {
    console.log("couldn't connect to database", err);
    process.exit();
  });
  require('./config/passport')(passport);
  app.use(morgan('dev')); // log every request to the console
  app.use(cookieParser()); // read cookies (needed for auth) 
 
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions

//*** uploading file/image *****/
//Set Storage Engine
var storage = multer.diskStorage({
  destination: "./public",
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
//Init upload
var upload = multer({ storage: storage }).single("myImage");

// Set view engine
app.set("view engine", "ejs");
// Set static folder
app.use(express.static("./public"));
// Set the initial route
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.render("index", { msg: err });
    } else {
      if (req.file == undefined) {
        res.render("index", { msg: "No file selected" });
      } else {
        res.render("index", {
          msg: "File uploaded successfully!",
          file: "public/${req.file.filename}"
        });
        console.log("File uploaded successfully!");
      }
    }
  });
});

// *****  Using Routes  ******
//Product Module Routes
app.use("/api/product", productRoute);
app.use("/api/brand", brandRoute);
app.use("/api/category", categoryRoute);
app.use("/api/department", departmentRoute);
//Employee Routes
// app.use("/api/employee", employeeRoute);
//Customer Routes
app.use("/api/customer", customerRoute);
//Store Routes
app.use("/api/store", storeRoute);
//Store Product Routes
app.use("/api/storeProduct", storeProductRoute);
//Sales Order Routes
app.use("/api/sales", salesOrderRoute);
//Sales Return Routes
app.use("/api/return", salesReturnRoute);
//Waste Product Routes
app.use("/api/waste", wasteProductRoute);
app.use("/auth",authRoute)


app.listen(port);
console.log("The magic happens on port " + port);
