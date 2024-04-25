import css from './Searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = event => {
    setInputValue(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    onSearch(inputValue);
    setInputValue('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={inputValue}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};
