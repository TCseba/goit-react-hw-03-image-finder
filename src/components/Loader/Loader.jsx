import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <BeatLoader
      className={styles.loader}
      color="#58bde0"
      size={30}
      align="center"
      justify="center"
      aria-label="Beat Loader"
      data-testid="loader"
    />
  );
}
