import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageUrl, largeImageUrl }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.image}
        src={imageUrl}
        data-large={largeImageUrl}
        alt=""
      />
    </li>
  );
};
