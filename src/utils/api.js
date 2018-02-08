import axios from 'axios';

const baseUrl = 'https://api.petfinder.com/breed.list?format=json&key=fd015e370fd0e8d52afa2ce02ef5708c&animal=cat';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = baseUrl;

export default {
    search: function() {

        return axios.get(proxyUrl + targetUrl);
        // return axios.get(baseURL, {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Methods': 'OPTIONS, GET',
        //         'Access-Control-Request-Method': '*',
        //         'Access-Control-Allow-Headers': '*'
        //       },
        //       proxy: {
        //         host: '104.236.174.88',
        //         port: 3128
        //       }
        // });
    }
}


