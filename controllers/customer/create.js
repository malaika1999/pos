const Customer= require('../../models/customer/customer.js')

exports.createCustomer = (req,res) => {
        if(!req.body.name){
            return res.status(400).send({
                message: "customer name cannot be empty"
            })
        }
        const customer = new Customer({
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
        });
        customer.save().then(data=> {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "couldn't create customer"
            })
        })
}
