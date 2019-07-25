const Employee = require('../../models/employee/employee.js')

exports.updateEmployee =  (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message: "employee name can not be empty"
        });
    }

    Employee.findByIdAndUpdate(req.params.eId,{
        name: req.body.name,
        email: req.body.email,
        NIC: req.body.NIC,
        contactNo: req.body.contactNo,
        address: req.body.address,
        city:  req.body.city,
        country: req.body.country,
        state: req.body.state,
        postalCode: req.body.postalCode,
        dateOfBirth: req.body.dateOfBirth,
        role: req.body.role,
        bankAccNo: req.body.bankAccNo,
        perHourRate: req.body.perHourRate,
        workingHoursPerWeek: req.body.workingHoursPerWeek,
        extraHourRate: req.body.extraHourRate,
        image: req.body.image
    },{new : true})
    .then(employee => {
        if(!employee){
            return res.status(404).send({
                message: "employee not found with id " + req.params.eId
            });
        }
        res.send({
            message:"employee updated successfully"
        });
    }).catch (err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "employee not found with id " + req.params.eId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.pId
        });
    });
}