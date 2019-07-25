const Employee = require('../../models/employee/employee.js')

exports.oneEmployee =  (req, res) => {
    Employee.findById(req.params.eId)
    .then(employee => {
        if(!employee){
            return res.status(404).send({
                message:"employee not found with id"+ req.params.eId
            })
        }
        res.send(employee);
    })
    .catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "employee not found with id " + req.params.eId
              });
        }
        return res.status(500).send({message: "error"});
    })
}