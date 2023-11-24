import React from 'react';
import Review from './Review';
import styles from './ReviewModal.module.css'

function ReviewModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen){ 

    return null;
}

  return (
    
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <Review onSubmit={onSubmit} onClose={onClose}/>
      </div>
    </div>
  );
}

export default ReviewModal