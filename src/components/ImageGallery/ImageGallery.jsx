import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          largeImageUrl={image.largeImageUrl}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};
