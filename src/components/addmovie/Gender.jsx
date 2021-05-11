import React from 'react';
import PropTypes from 'prop-types';

class Gender extends React.Component {
  render() {
    const { initState: { genre }, handleChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="rating-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="gender-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Gender.propTypes = {
  genre: PropTypes.string,
}.isRequired;

export default Gender;
