
const Promotion = require('../db');




const createPromotion = async (name, description, discount_rate, start_date, end_date) => {

    return await Promotion.create({ name, description, discount_rate, image, start_date, end_date });


}

const getAllPromotions = async () => {

    const allPromotions = await Promotion.findAll();
    return allPromotions;


}

module.exports = {
    createPromotion,
    getAllPromotions
}