import React from 'react';
import PropTypes from 'prop-types';

import Title from './addmovie/Title';
import Subtitle from './addmovie/Subtitle';
import Image from './addmovie/Image';
import Storyline from './addmovie/Storyline';

const initState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      () => ({ [name]: value }),
    );
  }

  render() {
    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">

        <Title initState={ this.state } handleChange={ this.handleChange } />

        <Subtitle initState={ this.state } handleChange={ this.handleChange } />

        <Image initState={ this.state } handleChange={ this.handleChange } />

        <Storyline initState={ this.state } handleChange={ this.handleChange } />

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
