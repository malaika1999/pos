const Product = require('../../../models/product/product.js');

exports.oneProduct =  (req, res) => {
    Product.findById(req.params.pId)
    .then(product => {
        if(!product){
            return res.status(404).send({
                message:"product not found with id"+ req.params.pId
            })
        }
        res.send(product);
    })
    .catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "product not found with id " + req.params.pId
              });
        }
        return res.status(500).send({message: "error"});
    })
}