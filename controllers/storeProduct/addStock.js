const StoreProduct = require("../../models/storeProduct/index");
const configdb = require("../../config/db");
const mongoose = require("mongoose");
var _ = require('lodash');

let addStock = async (req, res) => {
try {
    let addedStock = await StoreProduct.findOne({
        storeId: req.body.storeId
       }).exec();
       let productsInStore = addedStock.products;
     
      let existingProduct = _.find(productsInStore, function (o) { return o.productName == req.body.productName })
      if(existingProduct== undefined){
          console.log('product not found')
          let newProduct = {
              'productName': req.body.productName,
              'stockAvailable': req.body.stockAvailable,
              'soldQty': 0
          }
          StoreProduct.findOneAndUpdate({
              storeId: req.body.storeId
          },
             {$push: {products: newProduct}}
          ).exec()
          console.log(newProduct)
          return res.send({
             data: newProduct
         }) 
      }
       if(existingProduct){
        let updatedStore = await StoreProduct.updateOne(
             {'products.productName': req.body.productName},
             {$inc : {'products.$.stockAvailable': 1}}
           ).exec();
      }
      return res.send({
         status: true,
         message: "quantity updated"
     })
                   
} catch (error) {
        return res.send({
            status: false,
            message: error.message
        })
    }
  
};

module.exports = {
  addStock
};
