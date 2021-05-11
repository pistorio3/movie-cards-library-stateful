import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { initState: { storyline }, handleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
}.isRequired;

export default Storyline;
