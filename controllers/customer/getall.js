const Customer = require('../../models/customer/customer.js')

exports.allCustomers =  (req, res) => {
    Customer.find()
    .then(customer => {
        res.send(customer);
    } ).catch(err => {
        res.status(500).send({
            message: "no customer found"
        })
    })
}