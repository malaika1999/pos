const Employee = require('../../models/employee/employee.js')

exports.deleteEmployee = (req, res) => {
    Employee.findByIdAndRemove(req.params.eId)
    .then(employee => {
        if(!employee){
            return res.status(404).send({
                message:"employee not found with id " + req.params.eId
            })
        }
        res.send({message: "employee deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "employee not found with id " + req.params.eId
            });                
        }
        return res.status(500).send({
            message: "Could not delete employee with id " + req.params.eId
        });
    });
}