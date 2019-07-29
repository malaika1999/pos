const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const autoIncrement = require("mongoose-auto-increment");
const MongoURI = require("../../config/db");

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postalCode: {
    type: Number
  },
  image: {
    type: String,
    default: "https://via.placeholder.com/200"
  }
});

mongoose.model("store", storeSchema);
module.exports = mongoose.model("store");
