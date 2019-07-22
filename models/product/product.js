const mongoose = require('mongoose');
var productSchema = new mongoose.Schema({

    productId: {
        type: Number,
        unique: true,
    },
    name: {
        type : String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    description: {
        type: String,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'brand',
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'department',
    },
    unit: {
        type: String,
    },
    barcode: {
        type: Number,
        required: true,
    },
    isRestricted: {
        type: Boolean,
    }
    // image: {
    //     type: String,
    //     default: 'https://via.placeholder.com/200'
    // }
    
})
module.exports = mongoose.model(
    'product', productSchema, 'products'
)