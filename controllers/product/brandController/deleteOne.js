const Brand= require('../../../models/product/brand.js');

exports.deleteBrand = (req, res) => {
    Brand.findByIdAndRemove(req.params.bId)
    .then(brand => {
        if(!brand){
            return res.status(404).send({
                message:"brand not found with id " + req.params.bId
            })
        }
        res.send({message: "brand deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "brand not found with id " + req.params.bId
            });                
        }
        return res.status(500).send({
            message: "Could not delete brand with id " + req.params.bId
        });
    });
}