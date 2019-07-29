const Product = require("../../../models/product/product/index.js");

const allProducts = async (req, res) => {
    try {
        const product = await Product.find().exec();
        if(product){
            res.status(200).send({
                status: true,
                message: "Following are the products stored in database",
                data: product
            })
        } else if(!product){
            res.status(404).send({
                status: false,
                message: "No products found"
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
    allProducts
}