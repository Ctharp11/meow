import React, {Component} from 'react';
import api from '../utils/api';
import ListItem from './ListItem';
import '../App.css';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      name: [],
      age: [], 
      breed: [],
      descriptio: [],
      media: [],
      sex: [],
      contactPhone : [],
      contactState : [],
      contactCity: [],
      contactEmail : []
    }
  }

  componentWillMount() { 
    // this.searchCatBreed()
    this.petFind()
    this.mapPets()
  }

  mapPets = () => {
    api.searchPetFind()
    .then(res => {
      let response = res.data.petfinder.pets.pet;
      response.map(data => {
        let name = data.name.$t;
        let age = data.age.$t;
        let breed = data.breeds.breed.$t
        let description = data.description.$t;
        let media = data.media;
        if (media.photos) {
          // console.log('this one has photos')
          let photo = media.photos.photo[0].$t;
          // console.log(photo)
        } else {
          // console.log('this one doest have photos')
          media = {photo: 'https://www.pexels.com/photo/adorable-animal-animal-world-cat-209037/'}
          //  console.log(media.photo)
        }
        let sex = data.sex.$t;
        let contactPhone = data.contact.phone.$t;
        let contactState = data.contact.state.$t;
        let contactCity = data.contact.city.$t;
        let contactEmail = data.contact.email.$t;
        console.log(contactCity);
        return data;
      })
    })
    return
  }

  searchCatBreed = () => {
    api.searchCatBreed()
    // .then(res => { console.log(res.data.petfinder.breeds.breed);})
    // .then(res => this.setState({ name: res.data.petfinder.breeds.breed}))
    // .catch(err => console.log(err));
  }

  petFind = () => {
    api.searchPetFind()
    
    // .then(res => { console.log(res.data.petfinder.pets.pet[0].name.$t);})
    .then(res => this.setState({ name: res.data.petfinder.pets.pet[0].name.$t}))
    .catch(err => console.log(err)); 
  }
  
  render() {
    return (
      <div className="container"> 
        <ListItem 
          name={this.state.name} 
        />
      </div>
    );
  }
}

export default ListContainer;