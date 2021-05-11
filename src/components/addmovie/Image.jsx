import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { initState: { imagePath }, handleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
}.isRequired;

export default Image;
