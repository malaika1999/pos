const Category = require('../../../models/product/category.js');

exports.oneCategory =  (req, res) => {
    Category.findById(req.params.cId)
    .then(category => {
        if(!category){
            return res.status(404).send({
                message:"category not found with id"+ req.params.cId
            })
        }
        res.send(category);
    })
    .catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "category not found with id " + req.params.cId
              });
        }
        return res.status(500).send({message: "error"});
    })
}