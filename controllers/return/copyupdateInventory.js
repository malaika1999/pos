const StoreProduct = require("../../models/storeProduct/index");
const Return = require("../../models/return/index");
var _ = require("lodash");

let updateInventory = async (req, res) => {
  let returnOrder = await Return.findOne({
    OrderNo: req.body.OrderNo
  })
    .lean()
    .exec();

  let productsInStore = await StoreProduct.findOne({
    storeId: req.body.storeId
  })
    .lean()
    .exec();
  
  let productsInReturn = returnOrder.products;
  let productsStoreWali = productsInStore.products;
  
  for (let i = 0; i < productsInReturn.length; i++) {
    let testing = _.find(productsInReturn, function(o) {
      return (
        o.Product.toString() == productsStoreWali[i].productName.toString()
      );
    });
    if (testing) {
      console.log("Balay Balay");
    var updatedStore = await StoreProduct.updateOne(
        {
          storeId: req.body.storeId,
          "products.productName" : productsInReturn[0].Product
        },
        {
          $inc: {
            "products.$.stockAvailable": productsInReturn[0].quantity
          }
        }
      ).exec();
    }
    else{
      console.log("no product found")
    }
  }

  res.send({
    productsInReturn: productsInReturn,
    productsStoreWali: productsStoreWali,
    productsInReturnQty: productsInReturn.length,
    productsInStoreQty: productsStoreWali.length
  });
};

module.exports = {
  updateInventory
};
