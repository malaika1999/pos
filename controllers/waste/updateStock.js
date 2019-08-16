const Return = require("../../models/return/index");
const Waste = require("../../models/waste/index");
const StoreProduct = require("../../models/storeProduct/index");
var _ = require("lodash");

let updateStock = async (req, res) => {
try {
    let store = await StoreProduct.findOne({
        storeId: req.body.storeId
      })
        .lean()
        .exec();
      let returnOrder = await Return.findOne({
        _id: req.body.returnId
      });
      let waste = await Waste.findOne({
        storeId: req.body.storeId
      });
      let productsInStore = store.products;
      let productsToBeReturned = returnOrder.products;
      let productsToBeWasted = req.body.products;
      let productsInWaste = waste.products;
    
      for (let i = 0; i < productsToBeWasted.length; i++) {
        // var productAlreadyReturnOrder = productsToBeReturned.find(e => {
        //     return (
        //       e.Product.toString() == productsToBeWasted[i].Product.toString()
        //     );
        //   });
        var productAlreadyInStore = productsInStore.find(e => {
          return (
            e.productName.toString() == productsToBeWasted[i].Product.toString()
          );
        });
        var productAlreadyInWaste = productsInWaste.find(e => {
          return e.Product.toString() == productsToBeWasted[i].Product.toString();
        });
        if (productAlreadyInStore && !productAlreadyInWaste) {
         
          let newProduct = {
            Product: productsToBeWasted[i].Product,
            quantity: productsToBeWasted[i].quantity,
            comments: productsToBeWasted[i].comments
          };
          Waste.findOneAndUpdate(
            {
              storeId: req.body.storeId
            },
            { $push: { products: newProduct } }
          ).exec();
          console.log(newProduct);
          var updatedStore = await StoreProduct.updateOne(
            {
              storeId: req.body.storeId,
              "products.productName": productsToBeWasted[i].Product
            },
            {
              $inc: {
                "products.$.stockAvailable": -productsToBeWasted[i].quantity
              }
            }
          ).exec();
    
        } else if (productAlreadyInStore && productAlreadyInWaste) {
          
          var updatedStore = await StoreProduct.updateOne(
            {
              storeId: req.body.storeId,
              "products.productName": productsToBeWasted[i].Product
            },
            {
              $inc: {
                "products.$.stockAvailable": -productsToBeWasted[i].quantity
              }
            }
          ).exec();
          var updatedWasteStore = await Waste.updateOne(
            {
              storeId: req.body.storeId,
              "products.Product": productsToBeWasted[i].Product
            },
            {
              $inc: {
                "products.$.quantity": productsToBeWasted[i].quantity
              }
            }
          ).exec();
        }else if(!productAlreadyInStore){
            console.log("product does not exist")
        }
        res.send({
            productsInStore : productsInStore,
            productsToBeReturned : productsToBeReturned,
            productsToBeWasted : productsToBeWasted,
            productsInWaste : productsInWaste
        })
      }   
} catch (error) {
    return res.send({
        status: false,
        message: error.message
      });
}
  
};

module.exports = {
  updateStock
};
