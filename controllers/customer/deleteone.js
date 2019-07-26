const Customer = require('../../models/customer/customer.js')

exports.deleteCustomer = (req, res) => {
    Customer.findByIdAndRemove(req.params.cusId)
    .then(customer => {
        if(!customer){
            return res.status(404).send({
                message:"customer not found with id " + req.params.cusId
            })
        }
        res.send({message: "customer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "customer not found with id " + req.params.cusId
            });                
        }
        return res.status(500).send({
            message: "Could not delete customer with id " + req.params.cusId
        });
    });
}