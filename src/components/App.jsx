import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

const API_KEY = '42646310-ef56125427efcfe7b949942a4';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (query === '') return;
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(prevImages => [...prevImages, ...response.data.hits]);
        setLoadMore(response.data.total > page * 12);
        setLoadMoreError('');
      } catch (error) {
        Notiflix.Notify.info('Error fetching data');
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSearch = async inputValue => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
    setLoadMore(false);
  };

  const onLoadMore = async () => {
    if (!loadMore) {
      loadMoreError();
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    }
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.div}>
      <Searchbar onSearch={onSearch}></Searchbar>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <ImageGallery images={images}></ImageGallery>
      )}
      {images.length > 0 && <Button onLoadMore={onLoadMore}>Load More</Button>}
    </div>
  );
};
