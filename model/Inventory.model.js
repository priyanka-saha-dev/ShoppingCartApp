//Require mongoose package
const mongoose = require('mongoose');

//Define InventorySchema with title, description and category
const InventorySchema = new mongoose.Schema({
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
        type: Date,
        default: Date.now
    }
});

const inventory = module.exports = mongoose.model('Inventory', InventorySchema);

//InventorySchema.find() - Fetches all
module.exports.getAllInventoryItems = (callback) => {
    inventory.find(callback);
}
//InventorySchema.find() - Fetches item for 'id'
module.exports.getInventoryItemByID = (id, callback) => {
    inventory.findById(id, callback);
}
//inventory.create - Insert an item
module.exports.addInventoryItem = (newItem, callback) => {
    inventory.create(newItem, callback);
}
//InventorySchema.remove - Deletes an item
module.exports.deleteInventoryItemById = (id, callback) => {
    inventory.findByIdAndRemove(id, callback);
}
//InventorySchema.findOneAndUpdate - Updates the 'updateItem'
module.exports.updateInventoryItem = (id, updatedItem, callback) => {
    inventory.findByIdAndUpdate(id, updatedItem, callback);
}