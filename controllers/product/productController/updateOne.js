const Product = require('../../../models/product/product.js');

exports.updateProduct =  (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message: "product name can not be empty"
        });
    }

    Product.findByIdAndUpdate(req.params.pId,{
        productId: req.body.productId,
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        category: req.body.category,
        department: req.body.department,
        unit: req.body.unit,
        isRestricted: req.body.isRestricted,
        image : req.body.image  
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