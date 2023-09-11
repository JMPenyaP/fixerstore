const { createPromotion, getAllPromotions} = require("../controllers/promotionControllers")
const  createPromotionHandler = async (req,res)=>{
    const {name, description, discount_rate, start_date, end_date} = req.body 
    try {
      const newPormotion = await createPromotion(name, description, discount_rate, start_date, end_date)
      res.status(200).json(newPormotion)
    } catch (error) {
      res.status(400).json({error:error.message})
    }
 }

const  getAllPromotionsHandler= async (req,res)=>{
    try {
        
        const allPromotions = await getAllPromotions()
        res.status(200).json(allPromotions)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
 module.exports = {
   
    getAllPromotionsHandler,
    createPromotionHandler
};