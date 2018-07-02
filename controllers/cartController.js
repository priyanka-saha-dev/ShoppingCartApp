//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const cart = require('../model/Cart.model');

//GET HTTP method to /shop/cart
router.get('/', (req, res) => {
    //res.send("GET");
    cart.getAllCartItems((err, items) => {
        if (err) {
            return next(err);
        }         
        res.json(items);        
    });
});

//GET HTTP method to /shop/cart
router.get('/:id', (req, res, next) => {
    
    let id = req.params.id;
    cart.getCartItemByID(id, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    });
});

//POST HTTP method to /shop/cart
router.post('/', (req, res, next) => {
       
    cart.addCartItem(req.body, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    });
});

//PUT HTTP method to /shop/cart
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    
    cart.updateCartItem(id, req.body, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    });
});

//DELETE HTTP method to /shop/cart. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    //res.send("DELETE");
    let id = req.params.id;

    cart.deleteCartItemById(id, (err, item) => {
        if (err) {
            return next(err);
        }         
        res.json(item);
    })

})

module.exports = router;