const { UserReviews } = require("../db");

//! Crear una reseña
const createReview = async (req, res) => {
    const { ratingValue, comment, orderedProductId, userId } = req.body;

    try {
        const review = await UserReviews.create({
            ratingValue,
            comment,
            orderedProductId,
            userId,
        });

        res.status(201).json({ success: true, message: 'Reseña creada con éxito', review });
    } catch (error) {
        console.error(error);
        res.status(202).json({ success: false, message: 'Error 500 en el servidor' });
    }
};

module.exports = {
    createReview,
};
