const Product = require('../../../models/product/product.js');

exports.updateProduct =  (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message: "product name can not be empty"
        });
    }

    Product.findByIdAndUpdate(req.params.pId,{
        name: req.body.name,
        category: req.body.category,
        brand: req.body.brand,
        sku: req.body.sku,
        description: req.body.description,
        quantityAtHand:  req.body.quantityAtHand,
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
    },{new : true})
    .then(product => {
        if(!product){
            return res.status(404).send({
                message: "Product not found with id " + req.params.pId
            });
        }
        res.send({
            message:"product updated successfully"
        });
    }).catch (err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "product not found with id " + req.params.pId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.pId
        });
    });
}