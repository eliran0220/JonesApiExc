const Constants = require('../helpers/constants').Constants;

/**
 * 
 * @param {Object} params given info from user
 * @param {Object} errorsObj the errors object array
 * @description the function checks the parameters, if any paramter is missing, and also
 * if the given email and phone are in the right form.
 */
const checkInput = (params, errorsObj) => { // First check if null because it could be undefined, and then crash because of length func
    if (params.order_items == null || params.order_items.length == 0) 
        errorsObj.order_name = Constants.ORDER.missing_items;
    

    if (params.customer_name == null || params.customer_name == '') 
        errorsObj.customer_name = Constants.ORDER.missing_custoner_name;
    

    if (params.delivery_place == null || params.delivery_place == '') 
        errorsObj.delivery_place = Constants.ORDER.missing_delivery_place;
    

    if (params.payment_method == null || params.payment_method == '' || (params.payment_method.toLowerCase() != 'credit card' && params.payment_method.toLowerCase() != 'cash')) {
        errorsObj.payment_method = Constants.ORDER.missing_payment_method
    }
    checkEmail(params.email, errorsObj)
    checkPhone(params.phone_number, errorsObj)
}
/**
 * 
 * @param {String} email the email given
 * @param {Object} errorsObj the error object array
 * @description the function checks if the email is valid, first if it's empty, if not
 * it checks if email is in valid form
 */
const checkEmail = (email, errorsObj) => {
    if (email == null || email == '') {
        errorsObj.email = (Constants.EMAIL.missing);
    } else if (!email.match(Constants.EMAIL.email)) {
        errorsObj.email = Constants.EMAIL.fail;
    }
}

/**
 * 
 * @param {String} phone 
 * @param {Object} errorsObj 
* @description the function checks if the phone is valid, first if it's empty, if not
 * it checks if phone is in valid form
 */
const checkPhone = (phone, errorsObj) => {
    if (phone == null || phone === '') {
        errorsObj.phone = Constants.PHONE.missing;
    } else if (phone.length < 9 || phone.length > 10 || !phone.match(Constants.PHONE.phone)) {
        errorsObj.phone = Constants.PHONE.fail;
    }
}

module.exports = {
    checkInput
}
