import React, {Component} from 'react';
import api from '../utils/api';
import ListItem from './ListItem';
import '../App.css';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      name: [],
      age: [], 
      breed: [],
      description: [],
      photos: [],
      sex: [],
      contactPhone : [],
      contactState : [],
      contactCity: [],
      contactEmail : []
    }
  }

  componentWillMount() { 
    this.petFind()
  }

  petFind = () => {
    api.searchPetFind()
    .then(results => this.setState({ results: results.data.petfinder.pets.pet}))
  }
  
  render() {
    return (
      <div className="container"> 
        <h2 className="container-head"> Adopt an Austin Cat</h2>
        <ListItem 
          results={this.state.results} 
        />
      </div>
    );
  }
}

export default ListContainer;