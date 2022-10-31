const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    price:{
        type: String,
        required:[true,'Firstname is required']
    },
    description:{
        type: String,
        required :[true,'Lastname is required']
    },
    quantity:{
        type: String,
        required :[true,'email is required']
    }
});

const Product = mongoose.model('products', productSchema)

module.exports = Product