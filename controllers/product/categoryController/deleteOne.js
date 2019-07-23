const Category= require('../../../models/product/category.js');

exports.deleteCategory = (req, res) => {
    Category.findByIdAndRemove(req.params.cId)
    .then(category => {
        if(!category){
            return res.status(404).send({
                message:"category not found with id " + req.params.cId
            })
        }
        res.send({message: "category deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "category not found with id " + req.params.cId
            });                
        }
        return res.status(500).send({
            message: "Could not delete category with id " + req.params.cId
        });
    });
}