import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore, children }) => {
  return (
    <div>
      <button type="button" className={css.button} onClick={onLoadMore}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
