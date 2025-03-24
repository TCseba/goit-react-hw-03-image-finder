import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.search.value.trim();
    if (searchQuery && searchQuery !== query) {
      setQuery(searchQuery);
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery query={query} />
    </div>
  );
};
