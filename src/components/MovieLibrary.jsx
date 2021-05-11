import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  addMovie = (newMovie) => {
    this.setState((lastState) => ({ movies: [...lastState.movies, newMovie] }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      () => ({ [name]: value }),
    );
  }

  searchMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let currentFilter = movies;

    if (bookmarkedOnly) {
      return currentFilter.filter(({ bookmarked }) => bookmarked === true);
    }

    if (selectedGenre !== '') {
      return currentFilter.filter(({ genre }) => genre === selectedGenre);
    }

    if (searchText !== '') {
      const textToLowerCase = searchText.toLowerCase();
      currentFilter = movies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(textToLowerCase)
        || subtitle.toLowerCase().includes(textToLowerCase)
        || storyline.toLowerCase().includes(textToLowerCase)
      ));
    }

    return currentFilter;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />

        <MovieList movies={ this.searchMovies() } />

        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
