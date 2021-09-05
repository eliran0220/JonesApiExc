/**
 * Constant object for the api messages
 */
var Constants = Object.freeze({
    ORDER: {
        success: "Order has been succesfully made!",
        fail: "Order has failed, plesae try again later.",
        missing_items: "Nothing was ordered, please choose your items.",
        missing_custoner_name :"Please type your name",
        missing_delivery_place : "Please choose your delivery place",
        missing_payment_method : "Please choose your payment method, cash or credit card",
        no_orders_fail :"Can not retrieve todays orders, please try again later",
        no_orders: "There are no orders from today, yet."
    },
    
    EMAIL: {
        email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
        fail: "Email is not in valid form, please correct it.",
        missing: "Email is missing, please fill your email"
    },
    PHONE: {
        phone: /^\d+$/,
        fail: "Phone is not in valid format, numbers only",
        missing: "Phone is missing, please fill your phone"
    },
});

module.exports = {
    Constants
}
