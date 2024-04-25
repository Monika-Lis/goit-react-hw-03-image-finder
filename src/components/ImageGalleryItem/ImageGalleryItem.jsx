import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imageUrl, largeImageUrl, onClick }) => {
  console.log();
  return (
    <li className={css.galleryItem}>
      <img
        className={css.image}
        src={imageUrl}
        alt=""
        onClick={onClick}
        style={{ cursor: 'pointer' }}
        data-large={largeImageUrl}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  largeImageUrl: PropTypes.string,
  onClick: PropTypes.func,
};
