const product = require('../../../models/product/product');

const allProducts = async (req,res) =>{
    let products = await product.find().then(product => {
        res.send(product);
    })
     .catch(err => {
         res.status(500).send({
             message: "products couldnt be retrieved"
         })
     })
}

module.exports ={
    allProducts
}

