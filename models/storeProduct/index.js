const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeProductSchema = mongoose.Schema({
    storeId : {
        type: Schema.Types.ObjectId,
        ref: 'store'
    },
    products: [{
        productName: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
        // quantity:{
        //     type: Number
        // }
        stockAvailable: {
            type: Number
        },
        soldQty: {
            type: Number
        }
    }]
})

mongoose.model("storeProduct", storeProductSchema);
module.exports = mongoose.model("storeProduct");