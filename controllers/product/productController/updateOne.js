const Product = require("../../../models/product/product/index.js");

const updateProduct = async (req, res) => {
  try {
    let updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.pId },
      {
        name: req.body.name,
        category: req.body.category,
        brand: req.body.brand,
        sku: req.body.sku,
        description: req.body.description,
        quantityAtHand: req.body.quantityAtHand,
        asOfDate: req.body.asOfDate,
        reOrderPoint: req.body.reOrderPoint,
        inventoryAssetAccount: req.body.inventoryAssetAccount,
        department: req.body.department,
        salesPrice: req.body.salesPrice,
        incomeAccount: req.body.incomeAccount,
        purchaseInfo: req.body.purchaseInfo,
        costExpenseAccount: req.body.costExpenseAccount,
        preferredVendor: req.body.preferredVendor,
        isRestricted: req.body.isRestricted,
        image: req.body.image
      }
    ).exec();
    if (!req.body.name || !req.body.quantityAtHand || !req.body.sku) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    return res.status(200).send({
      status: true,
      message: "Product updated successfully",
      data: updatedProduct
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  updateProduct
};
