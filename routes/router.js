const router = require('express').Router();
const moment = require('moment')
const Order = require('../models/Order');
const {v4: uuidv4} = require('uuid')
const helpers = require('../helpers/helper_func')
const Constants = require('../helpers/constants').Constants


/**
 * @method POST
 * @param none
 * @description - Order a new order, check first if the params are empty,
 * if not, check if email and phone number are in a valid form (example@gmail.com, 054-1234567). 
 * If there are any problems, we add them to an object and send it back.
 */
router.post("/saveOrder", async (req, res) => {
    const params = req.body;
    const errors = {}
    // Check for any errors available, if so, add them to the errors object and send at last
    helpers.checkInput(params, errors)
    // If the length of errors is bigger then 0, it means there were errors, send back status 400.
    if (Object.keys(errors).length > 0) {
        console.log("Errors from the user input: \n", errors);
        res.status(400).json(errors)
    } else {
        const new_order = new Order({
            id: uuidv4(),
            order_items: params.order_items,
            customer_name: params.customer_name,
            phone_number: params.phone_number,
            email: params.email,
            delivery_place: params.delivery_place,
            price: params.price,
            payment_method: params.payment_method,
            created_at: moment(new Date()).format('DD/MM/YYYY')
        });
        try {
            const order = await new_order.save();
            console.log("Order number %s has been added succesfully", order.id)
            res.status(200).json({message: Constants.ORDER.success, order: new_order});
        } catch (e) {
            console.log(e);
            res.status(500).json(Constants.ORDER.fail);
        }
    }
})

/**
 * @method GET
 * @param none
 * @description Retrieve all the orders made today, if there are no orders, return a message saying so.
 */
router.get("/getOrders", async (req, res) => {
    let current_date = moment(new Date()).format('DD/MM/YYYY');
    try {
        let orders = await Order.find({created_at: current_date});
        if (orders.length == 0) {
            console.log("No orders today");
            res.status(200).json(Constants.ORDER.no_orders);
        } else {
            console.log("Orders from today :\n", orders)
            res.status(200).json(orders);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json(Constants.ORDER.no_orders_fail);
    }
})

module.exports = router;
