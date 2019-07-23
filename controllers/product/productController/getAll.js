const product = require('../../../models/product/product.js');

exports.allProducts =  (req, res) => {
    product.find()
    .then(product => {
        res.send(product);
    } ).catch(err => {
        res.status(500).send({
            message: "no product found"
        })
    })
}