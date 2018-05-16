//Require mongoose package
const mongoose = require('mongoose');

//Define CartSchema with title, description and category
const CartModelSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['Groceries', 'Electronics', 'Apparels']
    },
    quantity: {
        type: Number,
        default: 0
    },
    expiry: {
        type: Date
    }
});

const  CartSchema = module.exports = mongoose.model('CartSchema', CartModelSchema);

//CartSchema.find() returns all the items
module.exports.getAllCartItems = (callback) => {
    CartSchema.find(callback);
}

//newItem.save is used to insert the document into MongoDB
module.exports.addItem = (newItem, callback) => {
    newItem.save(callback);
}

//Here we need to pass an id parameter to CartSchema.remove
module.exports.deleteItemById = (id, callback) => {
    let query = {_id: id};
    CartSchema.remove(query, callback);
}