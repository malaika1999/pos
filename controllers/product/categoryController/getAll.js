const Category = require("../../../models/product/category/index.js");

const allCategories = async (req, res) => {
    try {
        const category = await Category.find().exec();
        if(category){
            res.status(200).send({
                status: true,
                message: "Following are the categories stored in database",
                data: category
            })
        } else if(!category){
            res.status(404).send({
                status: false,
                message: "No categories found"
            })
        }    
    } catch (error) {
        res.status(500).send({
            status:false,
            message: error.message
        })
    }   
}
module.exports = {
    allCategories
}