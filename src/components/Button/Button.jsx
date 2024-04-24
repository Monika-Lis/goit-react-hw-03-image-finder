import css from './Button.module.css';

export const Button = ({ onLoadMore, children }) => {
  return (
    <div>
      <button type="button" className={css.button} onClick={onLoadMore}>
        {children}
      </button>
    </div>
  );
};
