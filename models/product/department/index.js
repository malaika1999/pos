const mongoose = require("mongoose");
//Adding Unique Validator
// var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

//Defining Brand Schema
let departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    unique: true
  }
});

//Exporting the Model

// mongoose.model(
//      1st argument = Name
//      2nd arugment = Schema
//      3rd argument = Collection Name you want to store in DB
//)

//Using Unique Validator Plugin
//brandSchema.plugin(uniqueValidator);
module.exports = mongoose.model(
  "department",
  departmentSchema,
  "productdepartments"
);
