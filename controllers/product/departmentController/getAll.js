const department = require('../../../models/product/department.js');

exports.allDepartments = async (req, res) => {
    department.find()
    .then(department => {
        res.send(department);
    } ).catch(err => {
        res.status(500).send({
            message: "no department found"
        })
    })
}