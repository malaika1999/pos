const product = require('../../../models/product/product.js')

const createProduct = async (req,res) => {
    var product = new product({
        productId: req.body.productId,
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        category: req.bosy.category,
        department: req.body.department,
        unit: req.body.unit,
        barcode: req.bosy.barcode,
        isRestricted: req.body.isRestricted   
    })
    try{
        let createdProduct = await product.save();
        res.status(201).send({
            status: true,
            message: "product created successfully",
            data: createdProduct
        })

    }catch (error){
        res.status(500).send({
            status:false,
            message: "product not created"
        })
    }
}

module.exports ={
    createProduct
};