const Brand = require('../../../models/product/brand.js');

exports.updateBrand = (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message: "brand name can not be empty"
        });
    }

    Brand.findByIdAndUpdate(req.params.bId,{
        name: req.body.name
    },{new : true})
    .then(brand => {
        if(!brand){
            return res.status(404).send({
                message: "brand not found with id " + req.params.bId
            });
        }
        res.send({
            message:"brand updated successfully"
        });
    }).catch (err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "brand not found with id " + req.params.bId
            });                
        }
        return res.status(500).send({
            message: "Error updating brand with id " + req.params.bId
        });
    });
}