import React, {Component} from 'react';
import api from '../utils/api';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      kitty: []
    }
  }

  searchCatBreed = () => {
    api.searchCatBreed()
    .then(res => console.log(res.data.petfinder.breeds.breed))
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
      <div className="ListContainer">

         <h1> List Container </h1>
        
      </div>
    );
  }
}

export default ListContainer;