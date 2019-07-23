const category = require('../../../models/product/category.js');

exports.allCategories =  (req, res) => {
    category.find()
    .then(category => {
        res.send(category);
    } ).catch(err => {
        res.status(500).send({
            message: "no category found"
        })
    })
}