import axios from 'axios';

const catBreedUrl = 'https://api.petfinder.com/breed.list?format=json&key=fd015e370fd0e8d52afa2ce02ef5708c&animal=cat';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const petFindUrl = 'https://api.petfinder.com/pet.find?location=tx&format=json&output=full&key=fd015e370fd0e8d52afa2ce02ef5708c&animal=cat';


export default {

    searchCatBreed: () => {
        return axios.get(proxyUrl + catBreedUrl);
    }, 

    searchPetFind: () => {
        return axios.get(proxyUrl + petFindUrl);
    }
}


