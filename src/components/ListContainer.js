import React, {Component} from 'react';
import api from '../utils/api';
import ListItem from './ListItem';
import '../App.css';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      kitty: []
    }
  }

  searchCatBreed = () => {
    api.searchCatBreed()
    .then(res => this.setState({ kitty: res.data.petfinder.breeds.breed}))
    .catch(err => console.log(err));
  }

  petFind = () => {
    api.searchPetFind()
    .then(res => console.log(res.data.petfinder.pets.pet))
    .catch(err => console.log(err)); 
  }
  
  render() {
    this.searchCatBreed()
    this.petFind();
    return (
      <div className="container"> 
        <ListItem props={this.state.kitty} />
      </div>
    );
  }
}

export default ListContainer;