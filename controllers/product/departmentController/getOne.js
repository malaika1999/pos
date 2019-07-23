const Department = require('../../../models/product/department.js');

exports.oneDepartment = async (req, res) => {
    Department.findById(req.params.dId)
    .then(department => {
        if(!department){
            return res.status(404).send({
                message:"department not found with id"+ req.params.dId
            })
        }
        res.send(department);
    })
    .catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "department not found with id " + req.params.dId
              });
        }
        return res.status(500).send({message: "error"});
    })
}