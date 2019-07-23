const Department = require('../../../models/product/department.js');

exports.deleteDepartment = (req, res) => {
    Department.findByIdAndRemove(req.params.dId)
    .then(department => {
        if(!department){
            return res.status(404).send({
                message:"department not found with id " + req.params.dId
            })
        }
        res.send({message: "department deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "department not found with id " + req.params.dId
            });                
        }
        return res.status(500).send({
            message: "Could not delete department with id " + req.params.dId
        });
    });
}