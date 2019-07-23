const Product = require('../../../models/product/product.js')

exports.createProduct = (req,res) => {
        if(!req.body.name){
            return res.status(400).send({
                message: "product name cannot be empty"
            })
        }
        const product = new Product({
            productId : req.body.productId, 
            name: req.body.name,
            description: req.body.description,
            brand: req.body.brand,
            category: req.body.category,
            department: req.body.department,
            unit: req.body.unit,
            barcode: req.body.barcode,
            isRestricted: req.body.isRestricted  
        });
        product.save().then(data=> {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: "couldn't create product"
            })
        })
}
