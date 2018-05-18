//Require mongoose package
const mongoose = require('mongoose');

//Define InventorySchema with title, description and category
const InventoryModelSchema = mongoose.Schema({
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

const InventorySchema = module.exports = mongoose.model('InventorySchema', InventoryModelSchema);

//InventorySchema.find() - Fetches all
module.exports.getAllInventoryItems = (callback) => {
    InventorySchema.find(callback);
}
//InventorySchema.find() - Fetches item for 'id'
module.exports.getInventoryItemByID = (id, callback) => {
    let query = {_id: id};
    InventorySchema.find(query, callback);
}
//newItem.save - Insert an item
module.exports.addInventoryItem = (newItem, callback) => {
    newItem.save(callback);
}
//InventorySchema.remove - Deletes an item
module.exports.deleteInventoryItemById = (id, callback) => {
    let query = {_id: id};
    InventorySchema.remove(query, callback);
}
//InventorySchema.findOneAndUpdate - Updates the 'updateItem'
module.exports.updateInventoryItem = (id, updatedItem, callback) => {
    let query = {_id: id};
    InventorySchema.findOneAndUpdate(query, {$set : {updatedItem}}, { new: true }, callback);
}