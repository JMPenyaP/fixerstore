import { useState, useEffect } from "react";
import styles from "./ReviewForm.module.css";
import { validate } from "../Review/validate";

const Review = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    ratingValue: 3,
    comment: "",
  });

  const handleRatingChange = (event) => {
    const ratingValue = parseInt(event.target.value);
    setFormData({ ...formData, ratingValue });
  };

  const handleReviewTextChange = (event) => {
    const comment = event.target.value;
    setFormData({ ...formData, comment });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    onSubmit(formData);
    setFormData({
      ratingValue: 3,
      comment: "",
    });
  };

  const getRatingColor = () => {
    if (formData.ratingValue <= 2) {
      return styles.red;
    } else if (formData.ratingValue <= 4) {
      return styles.yellow;
    } else {
      return styles.green;
    }
  };

  return (
    <div className={styles.reviewform}>
      <h2>Dejar una reseña</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.rating}>
          <label className={styles.label}>Puntuación:</label>
          {/* {errors.rating && <p className={styles.error}>{errors.rating}</p>} */}
          <input
            className={styles.input}
            type="range"
            min="0"
            max="5"
            step="1"
            name="ratingValue"
            value={formData.ratingValue}
            onChange={handleRatingChange}
          />
          <span className={`${styles.ratingValue} ${getRatingColor()}`}>
            {formData.ratingValue} estrella{formData.ratingValue !== 1 ? "s" : ""}
          </span>
        </div>
        <div>
          <label className={styles.label}>Reseña:</label>
          {/* {errors.reviewText && <p>{errors.reviewText}</p>} */}
          <textarea
            className={styles.textarea}
            name="comment"
            value={formData.comment}
            onChange={handleReviewTextChange}
            rows={4}
            cols={50}
          />
        </div>

        <button
          className={styles.button}
          type="submit"
        
          /* disabled={Object.keys(errors).length > 0} */
        >
          Enviar reseña
        </button>
      </form>
    </div>
  );
};

export default Review;

/*  const [errors, setErrors] = useState({});
     
           const handleInputChange = (event) => {
             const { name, value } = event.target;
             setFormData({
               ...formData,
               [name]: name === "rating" ? parseInt(value) : value,
             });
     
     
             const validationErrors = validate({ ...formData, [name]: value });
     
         // Establecer los errores para el campo específico
             setErrors({ ...errors, [name]: validationErrors[name] || "" });
     
           };
     
       
         const handleSubmit = (event) => {
             event.preventDefault();
     
     
             const validationErrors = validate(formData);
     
             // Si hay errores, establece los errores en el estado y detén el envío
             if (Object.keys(validationErrors).length > 0) {
                 setErrors(validationErrors);
                 return;
               }
           
               // Aquí puedes enviar la reseña y la puntuación al componente padre
               onSubmit(formData);
           
               // Limpiar los campos después del envío
               setFormData({
                 rating: 3,
                 reviewText: "",
               });
           };
           
     
         const getRatingColor = () => {
             if (formData.rating <= 2) {
               return styles.red;
             } else if (formData.rating <= 4) {
               return styles.yellow;
             } else {
               return styles.green;
             }
           };
     
     
           console.log('data', formData)
           console.log('errors', errors); */
