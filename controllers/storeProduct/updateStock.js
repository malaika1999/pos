const StoreProduct = require("../../models/storeProduct/index");
const configdb = require("../../config/db");
const mongoose = require("mongoose");
var _ = require('lodash');

let updateStock = async (req, res) => {
  let updatedStock = await StoreProduct.findOne({
   storeId: req.body.storeId
  }).exec();
  let productsInStore = addedStock.products;

 let existingProduct = _.find(productsInStore, function (o) { return o.productName == req.body.productName })
 if(existingProduct== undefined){
     console.log('product not found')
     return res.send({
         message: "Product not found"
     })
 }
  if(existingProduct){
   let updatedStore = await StoreProduct.updateOne(
        {'products.productName': req.body.productName},
        {$inc : {'products.$.stockAvailable': -1, 'products.$.soldQty': 1}}
      ).exec();
 }
 return res.send({
    status: true,
    message: "quantity updated"
})

};

module.exports = {
  updateStock
};
