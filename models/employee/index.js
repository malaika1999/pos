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
        unique: true,
        maxlength: 13,
        minlength: 13
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
    dateOfBirth: {
        type: Date
    },
    role: {
        type: String
    },
    employeeCode:{
        type: String,
        required: true
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
    },
    joiningDate:{
        type: Date
    }
    
})

autoIncrement.initialize(mongoose.createConnection(MongoURI.url));

employeeSchema.plugin(uniqueValidator);
employeeSchema.plugin(autoIncrement.plugin, {
    model: 'employee',
    field: 'employeeId',
    incrementBy: 1
})


mongoose.model('employee', employeeSchema);
module.exports = mongoose.model('employee');