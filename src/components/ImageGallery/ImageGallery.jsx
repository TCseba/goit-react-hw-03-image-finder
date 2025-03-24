import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ query }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (typedQuery, pageNum) => {
    const url = `https://pixabay.com/api/?key=47504167-343545c73170c1e828056a55b&q=${typedQuery}&page=${pageNum}&per_page=12&orientation=horizontal`;
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const { data } = response;
      const { totalHits, hits } = data;
      if (totalHits === 0) {
        setError('Nu a fost gasita nicio imagine care corespunde criteriului de cautare.');
        setIsLoading(false);
        return;
      }
      setImages(prevImages => [...prevImages, ...hits]);
    } catch (error) {
      setError('A aparut o eroare la cererea imaginilor de pe server.');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setImages([]);
      setPage(1);
      fetchImages(query, 1);
    }
  }, [query]);

  useEffect(() => {
    if (page > 1) {
      fetchImages(query, page);
    }
  }, [query, page]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ul className={styles.gallery}>
        {images.map((image, index) => (
          <ImageGalleryItem
            key={image.id}
            images={images}
            image={image}
            index={index}
          />
        ))}
      </ul>
      {images.length > 0 && !isLoading && (
        <button
          className={styles.loadMoreButton}
          onClick={() => {
            setIsLoading(true);
            setPage(prevPage => prevPage + 1);
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
}
