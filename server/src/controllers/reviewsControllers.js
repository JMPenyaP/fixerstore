const { UserReviews } = require("../db");

//! Crear una reseña
const createReview = async (req, res) => {
    const { ratingValue, comment, ProductId, userId } = req.body;

    try {
        const review = await UserReviews.create({
            ratingValue,
            comment,
            ProductId,
            userId,
        });

        res.status(201).json({ success: true, message: 'Reseña creada con éxito', review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error 500 en el servidor' });
    }
};

const getReviews =async(req,res)=>{
  const {id}= req.params
  try {
    const reviews = await UserReviews.findAll({
        where:{
          ProduuctId:id  
        }
    })
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error 500 en el servidor' })
  }
}

module.exports = {
    createReview,getReviews
};
