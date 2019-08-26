// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var uniqueValidator = require("mongoose-unique-validator");
// const MongoURI = require("../../config/db");
// var autoIncrement = require("mongoose-auto-increment");

// define the schema for our Photographer model
var empSchema = mongoose.Schema({

    local            : {
        email        :{
            type: String,
            unique: true,
            required: true 
        } ,
        password     : {
            type: String,
            required: true
        },
        employeeId: {
            type: Number,
            unique: true
          },
          name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
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
          employeeCode: {
            type: String,
            required: true
          },
          bankAccNo: {
            type: String,
            unique: true
          },
          perHourRate: {
            type: Number
          },
          workingHourPerWeek: {
            type: Number
          },
          extraHourRate: {
            type: Number
          },
          image: {
            type: String,
            default: "https://via.placeholder.com/200"
          },
          joiningDate: {
            type: Date
          },
    }
});

// generating a hash
empSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
empSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// autoIncrement.initialize(mongoose.createConnection(MongoURI.url));

empSchema.plugin(uniqueValidator);
// empSchema.plugin(autoIncrement.plugin, {
//   model: "Employee",
//   field: "employeeId",
//   startAt: 5322,
//   incrementBy: 3
// });

// create the model for photographers and expose it to our app
module.exports = mongoose.model('Employee', empSchema);