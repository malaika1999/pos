const Category = require('../../../models/product/category.js');

exports.updateCategory = (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message: "category name can not be empty"
        });
    }

    Category.findByIdAndUpdate(req.params.cId,{
        name: req.body.name
    },{new : true})
    .then(category => {
        if(!category){
            return res.status(404).send({
                message: "category not found with id " + req.params.cId
            });
        }
        res.send({
            message:"category updated successfully"
        });
    }).catch (err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "category not found with id " + req.params.cId
            });                
        }
        return res.status(500).send({
            message: "Error updating category with id " + req.params.cId
        });
    });
}