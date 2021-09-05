const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    id: {
        type: String,
        require: false,
        unique: true
    },
    order_items: {
        type: [],
        require: true
    },

    customer_name: {
        type: String,
        min: 5,
        max: 20,
        require: true
    },

    phone_number: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: false
    },

    delivery_place: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    payment_method: {
        type: String,
        require: true
    },
    created_at: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model("Order", OrderSchema);
