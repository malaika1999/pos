const Employee = require('../../models/employee/employee.js')

exports.createEmployee = (req,res) => {
        if(!req.body.name){
            return res.status(400).send({
                message: "employee name cannot be empty"
            })
        }
        const employee = new Employee({
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
            image: req.body.image,
            joiningDate: req.body.joiningDate
        });
        employee.save().then(data=> {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "couldn't create employee"
            })
        })
}
