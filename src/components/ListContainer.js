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
    // this.mapPets()
  }

  // mapPets = () => {
  //   api.searchPetFind()
  //   .then(res => {
  //     let response = res.data.petfinder.pets.pet;
  //     let name = [];
  //     let age = [];
  //     let breed = [];
  //     let description = [];
  //     let photos = [];
  //     let sex = [];
  //     let contactPhone = [];
  //     let contactState = [];
  //     let contactCity = [];
  //     let contactEmail = [];
  //     response.map(data => {
  //       name.push(data.name.$t);
  //       age.push(data.age.$t);
  //       breed.push(data.breeds.breed.$t);
  //       description.push(data.description.$t);
  //       let media = data.media;
  //       if (media.photos) {
  //         let photo = media.photos.photo[0].$t;
  //         photos.push(photo);
  //       } else {
  //         media = {photo: 'https://www.pexels.com/photo/adorable-animal-animal-world-cat-209037/'}
  //         photos.push(media.photo);
  //       }
  //       sex.push(data.sex.$t);
  //       contactPhone.push(data.contact.phone.$t);
  //       contactState.push(data.contact.state.$t);
  //       contactCity.push(data.contact.city.$t);
  //       contactEmail.push(data.contact.email.$t);
  //       return data;
  //     })
  //     this.setState({name});
  //     this.setState({age});
  //     this.setState({breed});
  //     this.setState({description});
  //     this.setState({photos});
  //     this.setState({sex});
  //     this.setState({contactPhone});
  //     this.setState({contactState});
  //     this.setState({contactCity});
  //     this.setState({contactEmail});
  //   })
  //   return
  // }

  searchCatBreed = () => {
    api.searchCatBreed()
    // .then(res => { console.log(res.data.petfinder);})
    // .then(results => this.setState({ results}))
    // .catch(err => console.log(err));
  }

  petFind = () => {
    api.searchPetFind()
    // .then(res => { console.log(res.data.petfinder.pets.pet[0].name.$t);})
    .then(results => this.setState({ results: results.data.petfinder.pets.pet}))
    // .catch(err => console.log(err)); 
  }
  
  render() {
    return (
      <div className="container"> 
        <h2> Adopt an Austin Kitty</h2>
        <ListItem 
          results={this.state.results} 
        />
      </div>
    );
  }
}

export default ListContainer;