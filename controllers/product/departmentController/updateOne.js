const Department = require('../../../models/product/department.js');

exports.updateDepartment = async (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message: "Department name can not be empty"
        });
    }

    Department.findByIdAndUpdate(req.params.dId,{
        name: req.body.name
    },{new : true})
    .then(department => {
        if(!department){
            return res.status(404).send({
                message: "Department not found with id " + req.params.dId
            });
        }
        res.send({
            message:"department updated successfully"
        });
    }).catch (err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Department not found with id " + req.params.dId
            });                
        }
        return res.status(500).send({
            message: "Error updating department with id " + req.params.dId
        });
    });
}