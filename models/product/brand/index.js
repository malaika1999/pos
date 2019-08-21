const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Defining Brand Schema
let brandSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    unique: true
  }
});

module.exports = mongoose.model("brand", brandSchema, "productbrands");
