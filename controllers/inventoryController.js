//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const inventory = require('../model/Inventory.model');

//GET HTTP method to /shop/inventory
router.get('/', (req, res) => {
    //res.send("GET");
    inventory.getAllInventoryItems((err, items) => {
        if (err) {
            return next(err);
        }         
        res.json(items);        
    });
});

//GET HTTP method to /shop/inventory
router.get('/:id', (req, res, next) => {
    
    let id = req.params.id;
    inventory.getInventoryItemByID(id, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    });
});

//POST HTTP method to /shop/inventory
router.post('/', (req, res, next) => {
       
    inventory.addInventoryItem(req.body, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    });
});

//PUT HTTP method to /shop/inventory
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    
    inventory.updateInventoryItem(id, req.body, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    });
});

//DELETE HTTP method to /shop/inventory. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    //res.send("DELETE");
    let id = req.params.id;

    inventory.deleteInventoryItemById(id, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    })

})

module.exports = router;