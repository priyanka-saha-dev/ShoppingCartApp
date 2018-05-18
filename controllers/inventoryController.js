//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const inventory = require('../model/Inventory.model');

//GET HTTP method to /shop/inventory
router.get('/', (req, res) => {
    //res.send("GET");
    inventory.getAllInventoryItems((err, items) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to load all lists. Error: ${err}`
            });
        } else {
            res.write(JSON.stringify({
                success: true,
                items: items
            }, null, 2));
            res.end();
        }
    });
});

//GET HTTP method to /shop/inventory
router.get('/:id', (req, res, next) => {
    
    let id = req.params.id;
    inventory.getInventoryItemByID(id, (err, item) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to load list for ${id}. Error: ${err}`
            });
        } else {
            res.write(JSON.stringify({
                success: true,
                items: item
            }, null, 2));
            res.end();
        }
    });
});

//POST HTTP method to /shop/inventory
router.post('/', (req, res, next) => {
    //res.send("POST");
    let newItem = new inventory({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        expiry: req.body.expiry,
        quantity: req.body.quantity

    });
    
    inventory.addInventoryItem(newItem, (err, item) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to Create item. Error: ${err}`
            });
        } else {
            res.json({
                success: true,
                message: `Item ${item.title} created successfully`
            });
        }
    });
});

//PUT HTTP method to /shop/inventory
router.put('/:id', (req, res, next) => {
    //res.send("PUT");
    let updatedItem = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        expiry: req.body.expiry,
        quantity: req.body.quantity
    };

    
    let id = req.params.id;
    console.log("PUT request id: " + id);

    inventory.updateInventoryItem(id, updatedItem, (err, item) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to Create item. Error: ${err}`
            });
        } else {
            res.json({
                success: true,
                message: `Item updated successfully`
            });
        }
    });
});

//DELETE HTTP method to /shop/inventory. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    //res.send("DELETE");
    let id = req.params.id;

    inventory.deleteInventoryItemById(id, (err, item) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to delete the item. Error: ${err}`
            });
        }
        else if (item) {
            res.json({
                success: true,
                message: `Item ${item.title} deleted successfully`
            });
        }
        else
            res.json({
                success: false
            });
    })

})

module.exports = router;