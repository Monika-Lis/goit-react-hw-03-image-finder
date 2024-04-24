import React, { useEffect, useState } from 'react';
import axios from 'axios';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

const API_KEY = '42646310-ef56125427efcfe7b949942a4';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') return;
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(response.data.hits);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSearch = async inputValue => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
  };

  return (
    <div className={css.div}>
      <Searchbar onSearch={onSearch}></Searchbar>
      <ImageGallery images={images}></ImageGallery>
    </div>
  );
};

/*<Loader></Loader>
      <Button></Button>
      <Modal></Modal> */
