const Department = require('../../../models/product/department.js');

exports.createDepartment = async (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
          message: "department name  cannot be empty"
        });
      }
    let department = new Department({
        name: req.body.name,
    })
    department.save()
    .then(data => {
        res.send(data);
    }).catch(err =>{
            res.status(500).send({
                message:"couldn't create department"
            })
    })
}