const Product = require('../../../models/Product/product');
const mongoose = require('mongoose');

const updateProduct = async (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({
            status: false,
            message: "Product Name cannot be empty"
        })
    }
    try {
        let updatedProduct = await Product.findByIdAndUpdate(req.params.pID, {
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        category: req.bosy.category,
        department: req.body.department,
        unit: req.body.unit,
        isRestricted: req.body.isRestricted  
        }).exec();
        return res.status(200).send({
            status: true,
            message: "Product updated successfully",
            data: updatedProduct
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    updateProduct
}