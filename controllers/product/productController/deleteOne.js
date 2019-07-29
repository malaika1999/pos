const Product = require("../../../models/product/product/index.js");

const deleteProduct = async (req, res) => {
try {
    let deletedProduct = await Product.findByIdAndDelete({
        _id: req.params.pId
    }).exec();
    if (deletedProduct) {
        return res.send({
            status: true,
            message: "product deleted successfully",
            data: deletedProduct
            })
    }
    else {
        return res.send({
            status: false,
            message: "product not found with id" + req.params.pId,
        })
    }

} catch (error) {
    return res.status(500).send({
        status:false,
        message: error.message
    })
}
    
}

module.exports = {
    deleteProduct
}