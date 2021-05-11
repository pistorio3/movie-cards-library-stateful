import React from 'react';
import PropTypes from 'prop-types';

class Assessment extends React.Component {
  render() {
    const { initState: { rating }, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          id="rating-input"
          type="number"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Assessment.propTypes = {
  rating: PropTypes.number,
}.isRequired;

export default Assessment;
