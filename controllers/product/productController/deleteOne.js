const mongoose = require("mongoose");
const product = require('../../../models/product/product');

const deleteOne = async(req,res) => {
    let deletedProduct = await product.findByIdAndDelete({
        _id: req.params.pId
    })

    if(!deletedProduct){
        return res.status(404).send({
            status: false,
            message: "no product found against ID" + req.params.pId
        })
    }else{
        return res.send({
            status:true,
            message: "product deleted",
            data: deletedProduct

        })
    }
}
module.exports = {
    deleteOne
}