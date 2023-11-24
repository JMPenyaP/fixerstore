import { useState, useEffect } from "react";
import styles from "./ReviewForm.module.css";

const Review = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    ratingValue: 5,
    comment: "",
  });

  const [commentError, setCommentError] = useState("");
  const [reviewSent, setReviewSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleRatingChange = (event) => {
    const ratingValue = parseInt(event.target.value);
    setFormData({ ...formData, ratingValue });
  };

  const handleReviewTextChange = (event) => {
    const comment = event.target.value;
    setFormData({ ...formData, comment });
    setCommentError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const comment = formData.comment;
    const commentRegex = /\S/;

    if (!commentRegex.test(comment)) {
      setCommentError("Debes dejar un comentario.");
    } else if (comment.length > 500) {
      setCommentError("El comentario no puede exceder los 500 caracteres.");
    } else {
      // Si pasa todas las validaciones, envía el formulario
      onSubmit(formData);
      setCommentError("");
      setReviewSent(true);
      setSuccessMessage("Reseña enviada!");
    }
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
      <h2>Reseña del producto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.rating}>
          <label className={styles.label}>Agrega una puntuación:</label>
          {/* {errors.rating && <p className={styles.error}>{errors.rating}</p>} */}
          <input
            className={styles.input}
            type="range"
            min="1"
            max="5"
            step="1"
            name="ratingValue"
            value={formData.ratingValue}
            onChange={handleRatingChange}
          />
          <span className={`${styles.ratingValue} ${getRatingColor()}`}>
            {formData.ratingValue} 
          </span>
        </div>
        <div>
          <label className={styles.label}>Deja un comentario:</label>
          <textarea
            className={styles.textarea}
            name="comment"
            value={formData.comment}
            onChange={handleReviewTextChange}
            rows={6}
            cols={60}
            />
            {commentError && (
              <p className={styles.error} style={{ color: "red" }}>
                {commentError}
              </p>
            )}
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">
            Enviar reseña
          </button>

          {/* Muestra el mensaje de éxito al lado derecho del botón */}
          {reviewSent && (
            <p className={styles.successMessage} style={{ color: "green" }}>
              {successMessage}
            </p>
          )}
        </div>
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
