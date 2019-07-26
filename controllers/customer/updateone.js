const Customer = require('../../models/customer/customer.js')

exports.updateCustomer =  (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            message: "customer name can not be empty"
        });
    }

    Customer.findByIdAndUpdate(req.params.cusId,{
            name: req.body.name,
            email: req.body.email,
            contactNo: req.body.contactNo,
            address: req.body.address,
            city:  req.body.city,
            country: req.body.country,
            state: req.body.state,
            postalCode: req.body.postalCode,
            points: req.body.points,
            cardNumber: req.body.cardNumber
    },{new : true})
    .then(customer => {
        if(!customer){
            return res.status(404).send({
                message: "customer not found with id " + req.params.cusId
            });
        }
        res.send({
            message:"customer updated successfully"
        });
    }).catch (err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "customer not found with id " + req.params.cusId
            });                
        }
        return res.status(500).send({
            message: "Error updating customer with id " + req.params.cusId
        });
    });
}