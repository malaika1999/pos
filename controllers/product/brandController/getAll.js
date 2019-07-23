const brand = require('../../../models/product/brand.js');

exports.allBrands =  (req, res) => {
    brand.find()
    .then(brand => {
        res.send(brand);
    } ).catch(err => {
        res.status(500).send({
            message: "no brand found"
        })
    })
}