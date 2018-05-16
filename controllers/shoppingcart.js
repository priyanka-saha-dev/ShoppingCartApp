//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const cart = require('../model/Cart');

//GET HTTP method to /shoppingcart
router.get('/', (req, res) => {
    //res.send("GET");
    cart.getAllCartItems((err, items) => {
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

//POST HTTP method to /shoppingcart
router.post('/', (req, res, next) => {
    //res.send("POST");
    let newItem = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        quantity: req.body.quantity,
        expiry: req.body.expiry
    };

    cart.addItem(newItem, (err, item) => {
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

//DELETE HTTP method to /shoppingcart. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    //res.send("DELETE");
    let id = req.params.id;

    cart.deleteItemById(id, (err, item) => {
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