const product = require('../../../models/product/product');

const oneProduct = async(req,res)=> {
    let product = await product.findById({
        _id: req.params.pId
    }).catch(
        (err)=> {
            if(err) {
                res.status(500).json(err);
                return
            }
        }
    )
if(!product) {
    return res.status(404).send({
        status: false,
        message: "Product not found against ID " + req.params.pID
    })
}
else {
    return res.send({
        status: true,
        message: "Product found successfully",
        data: product
    })
}
}

module.exports = {
oneProduct
}