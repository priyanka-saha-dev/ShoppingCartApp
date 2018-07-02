//Require mongoose package
const mongoose = require('mongoose');

//Define CartSchema
const CartSchema = new mongoose.Schema({
    itemID: {
        type: String,
        required: true
    },
    itemCategory: {
        type: String,
        required: true,
        enum: ['Groceries', 'Electronics', 'Apparels']
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemDateOfAddition: {
        type: Date,
        default: Date.now
    }
});

const cart = module.exports = mongoose.model('Cart', CartSchema);

//CartSchema.find() - Fetches all
module.exports.getAllCartItems = (callback) => {
    cart.find(callback);
}
//CartSchema.find() - Fetches item for 'id'
module.exports.getCartItemByID = (id, callback) => {
    cart.findById(id, callback);
}
//cart.create - Insert an item
module.exports.addCartItem = (newItem, callback) => {
    cart.create(newItem, callback);
}
//CartSchema.remove - Deletes an item
module.exports.deleteCartItemById = (id, callback) => {
    cart.findByIdAndRemove(id, callback);
}
//CartSchema.findOneAndUpdate - Updates the 'updateItem'
module.exports.updateCartItem = (id, updatedItem, callback) => {
    cart.findByIdAndUpdate(id, updatedItem, callback);
}