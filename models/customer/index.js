const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const MongoURI = require('../../config/db')
var autoIncrement = require('mongoose-auto-increment');

var customerSchema = new mongoose.Schema({
    customerId: {
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
    points: {
        type: Number
    },
    cardNumber: {
        type: String,
        required: true
    },
    isLoyal: {
        type: Boolean
    }
})

autoIncrement.initialize(mongoose.createConnection(MongoURI.url));

customerSchema.plugin(uniqueValidator);
customerSchema.plugin(autoIncrement.plugin, {
    model: 'customer',
    field: 'customerId',
    startAt: 100,
    incrementBy: 1
})

//mongoose.model('customer', customerSchema);
module.exports = mongoose.model('customer', customerSchema);