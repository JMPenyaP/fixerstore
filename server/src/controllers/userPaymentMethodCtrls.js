

const { User_Payment_Method } = require('../db');



const createUserPaymentMethod = async (user_id, payment_type_id, provider, account_number, expire_date, is_default) => {


    return await User_Payment_Method.create({ user_id, payment_type_id, provider, account_number, expire_date, is_default });

}

const getAllUserPaymentMethods = async () => {

    const allUserPaymentMethods = await User_Payment_Method.findAll();
    return allUserPaymentMethods;

}



module.exports = {

    createUserPaymentMethod,
    getAllUserPaymentMethods,

}