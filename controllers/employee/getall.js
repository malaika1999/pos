const Employee = require('../../models/employee/employee.js')

exports.allEmployees =  (req, res) => {
    Employee.find()
    .then(employee => {
        res.send(employee);
    } ).catch(err => {
        res.status(500).send({
            message: "no employee found"
        })
    })
}