const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
//const Schema = mongoose.Schema;
const MongoURI = require('../../config/db')
var autoIncrement = require('mongoose-auto-increment');

var employeeSchema = new mongoose.Schema({
    employeeId: {
        type: Number,
        unique: true
    },
    name: {
        type : String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    NIC: {
        type: String,
        required: true,
        unique: true
    },
    contactNo: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number
    },
    // dateOfBirth: {
    //     type: Date
    // },
    role: {
        type: String
    },
    bankAccNo: {
        type: String,
        unique: true
    },
    perHourRate: {
        type: Number,
    },
    workingHourPerWeek: {
        type: Number
    },
    extraHourRate: {
        type: Number
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/200'
    }
    
})

autoIncrement.initialize(mongoose.createConnection(MongoURI.url));

employeeSchema.plugin(uniqueValidator);
employeeSchema.plugin(autoIncrement.plugin, {
    model: 'employee',
    field: 'employeeId',
    //startAt: 0,
    incrementBy: 1
})


mongoose.model('employee', employeeSchema);
module.exports = mongoose.model('employee');