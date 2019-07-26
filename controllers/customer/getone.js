const Customer = require('../../models/customer/customer.js')

exports.oneCustomer =  (req, res) => {
    Customer.findById(req.params.cusId)
    .then(customer => {
        if(!customer){
            return res.status(404).send({
                message:"customer not found with id"+ req.params.cusId
            })
        }
        res.send(customer);
    })
    .catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "customer not found with id " + req.params.cusId
              });
        }
        return res.status(500).send({message: "error"});
    })
}