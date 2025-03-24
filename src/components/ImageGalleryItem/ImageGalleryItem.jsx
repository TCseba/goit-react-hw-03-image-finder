import React, { useState } from 'react';
import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({ images, image, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={styles.galleryItem} onClick={handleImageClick}>
        <img src={image.webformatURL} alt={image.tags} />{' '}
        {}
      </li>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </>
  );
}
