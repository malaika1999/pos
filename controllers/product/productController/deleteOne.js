const Product = require('../../../models/product/product.js');

exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.pId)
    .then(product => {
        if(!product){
            return res.status(404).send({
                message:"product not found with id " + req.params.pId
            })
        }
        res.send({message: "product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "product not found with id " + req.params.pId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.pId
        });
    });
}