import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre,
      onSearchTextChange, onBookmarkedChange, onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="first-input">
          Inclui o texto
          <input
            id="first-input"
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="second-input">
          Mostrar somente favoritos
          <input
            id="second-input"
            type="checkbox"
            data-testeid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

        <label data-testid="select-input-label" htmlFor="third-input">
          Filtrar por gênero
          <select
            id="third-input"
            type="select"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" selected value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>

        </label>

      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,

  param: PropTypes.shape({
    searchText: PropTypes.string,
    bookmarkedOnly: PropTypes.bool,
    selectedGenre: PropTypes.string,
  }),
}.isRequired;

export default SearchBar;
