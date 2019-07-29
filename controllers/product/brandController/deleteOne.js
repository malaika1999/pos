const Brand = require("../../../models/product/brand/index.js");

const deleteBrand = async (req, res) => {
try {
    let deletedBrand = await Brand.findByIdAndDelete({
        _id: req.params.bId
    }).exec();
    if (deletedBrand) {
        return res.send({
            status: true,
            message: "brand deleted successfully",
            data: deletedBrand
            })
    }
    else {
        return res.send({
            status: false,
            message: "brand not found with id" + req.params.bId,
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
    deleteBrand
}