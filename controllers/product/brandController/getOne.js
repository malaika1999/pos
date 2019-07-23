const Brand = require('../../../models/product/brand.js');

exports.oneBrand =  (req, res) => {
    Brand.findById(req.params.bId)
    .then(brand => {
        if(!brand){
            return res.status(404).send({
                message:"brand not found with id"+ req.params.bId
            })
        }
        res.send(brand);
    })
    .catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "brand not found with id " + req.params.bId
              });
        }
        return res.status(500).send({message: "error"});
    })
}