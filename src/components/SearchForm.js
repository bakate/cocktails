import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form className="form search-form" onSubmit={e => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

SearchForm.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchForm;
