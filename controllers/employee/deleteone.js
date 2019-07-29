const mongoose = require('mongoose');
const Employee = require("../../models/employee/index.js");

const deleteEmployee = async (req, res) => {
try {
    let deletedEmployee = await Employee.findByIdAndDelete({
        _id: req.params.eId
    }).exec();
    if (deletedEmployee) {
        return res.send({
            status: true,
            message: "Employee deleted successfully",
            data: deletedEmployee
            })
    }
    else {
        return res.send({
            status: false,
            message: "Employee not found with id" + req.params.eId,
        })
    }

} catch (error) {
    return res.status(500).send({
        status:false,
        message: error.message
    })
}
    
}

module.exports = {
    deleteEmployee
}