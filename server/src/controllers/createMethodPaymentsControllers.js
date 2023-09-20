const { MethodPayment } = require('sequelize');





const createMethodPaymentsControllers = async (method) => {


    const createM = await MethodPayment.create({ name: method })


    return createM;

}





module.exports = createMethodPaymentsControllers;