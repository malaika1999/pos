const Product = require('../../../models/product/product.js')

exports.createProduct = (req,res) => {
        if(!req.body.name){
            return res.status(400).send({
                message: "product name cannot be empty"
            })
        }
        const product = new Product({
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
        });
        product.save().then(data=> {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: "couldn't create product"
            })
        })
}
