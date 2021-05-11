import React from 'react';
import PropTypes from 'prop-types';

import Title from './addmovie/Title';
import Subtitle from './addmovie/Subtitle';
import Image from './addmovie/Image';
import Storyline from './addmovie/Storyline';
import Assessment from './addmovie/Assessment';
import Gender from './addmovie/Gender';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      () => ({ [name]: value }),
    );
  }

  clearState = () => {
    const { onClick } = this.props;

    onClick(this.state);
    this.initState();
  }

  initState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">

        <Title initState={ this.state } handleChange={ this.handleChange } />

        <Subtitle initState={ this.state } handleChange={ this.handleChange } />

        <Image initState={ this.state } handleChange={ this.handleChange } />

        <Storyline initState={ this.state } handleChange={ this.handleChange } />

        <Assessment initState={ this.state } handleChange={ this.handleChange } />

        <Gender initState={ this.state } handleChange={ this.handleChange } />

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.clearState }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
