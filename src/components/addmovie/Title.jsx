import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { initState: { title }, handleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          id="title-input"
          type="text"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Title;
