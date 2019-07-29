const Category = require("../../../models/product/category/index.js");

const deleteCategory = async (req, res) => {
try {
    let deletedCategory = await Category.findByIdAndDelete({
        _id: req.params.bId
    }).exec();
    if (deletedCategory) {
        return res.send({
            status: true,
            message: "category deleted successfully",
            data: deletedCategory
            })
    }
    else {
        return res.send({
            status: false,
            message: "category not found with id" + req.params.cId,
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
    deleteCategory
}