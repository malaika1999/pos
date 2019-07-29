const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const MongoURI = require("../../config/db");
var autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;

var inventorySchema = new mongoose.Schema({
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store",
    required: true
  },
  productName: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true,
    unique: true
  },
  stockAvailable: {
    type: Number,
    required: true
  },
  retailPrice: {
    type: Number,
    required: true
  },
  soldQty: {
    type: Number,
    required: true
  }
});

inventorySchema.plugin(uniqueValidator);

mongoose.model("inventory", inventorySchema);
module.exports = mongoose.model("inventory");
