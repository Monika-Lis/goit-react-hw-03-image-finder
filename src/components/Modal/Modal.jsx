import css from './Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const closeModal = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal} onClick={closeModal}>
        <img className={css.image} src={imageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string,
  onClose: PropTypes.func,
};
