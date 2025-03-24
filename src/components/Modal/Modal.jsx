import React from 'react';
import styles from './Modal.module.css';
import ReactModal from 'react-modal';

export default function Modal({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) {
  const handlePrevImage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {currentIndex > 0 && (
          <button className={styles.prevButton} onClick={handlePrevImage}>
            &larr;
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button className={styles.nextButton} onClick={handleNextImage}>
            &rarr;
          </button>
        )}
        <img
          src={images[currentIndex].largeImageURL}
          alt={images[currentIndex].tags}
          className={styles.image}
        />
      </ReactModal>
    </div>
  );
}
