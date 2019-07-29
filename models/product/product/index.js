const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const MongoURI = require("../../../config/db");
var autoIncrement = require("mongoose-auto-increment");

var productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "brand"
  },
  sku: {
    type: String,
    required: true
  },
  quantityAtHand: {
    type: Number,
    required: true
  },
  asOfDate: {
    type: Date
  },
  reOrderPoint: {
    type: Date
  },
  inventoryAssetAccount: {
    type: String
  },
  description: {
    type: String
  },
  salesPrice: {
    type: Number
  },
  incomeAccount: {
    type: String
  },
  purchaseInfo: {
    type: String
  },
  costExpenseAccount: {
    type: String
  },
  prefferendVendor: {
    type: String
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "department"
  },
  barcode: {
    type: Number,
    required: true
  },
  isRestricted: {
    type: Boolean
  },
  image: {
    type: String,
    default: "https://via.placeholder.com/200"
  }
});

autoIncrement.initialize(mongoose.createConnection(MongoURI.url));

productSchema.plugin(uniqueValidator);
productSchema.plugin(autoIncrement.plugin, {
  model: "product",
  field: "productId",
  startAt: 150000,
  incrementBy: 1
});
productSchema.plugin(autoIncrement.plugin, {
  model: "product",
  field: "barcode",
  startAt: 202000000001,
  incrementBy: 1
});

mongoose.model("products", productSchema);
module.exports = mongoose.model("products");
