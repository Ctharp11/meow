import React, { Component } from 'react';
import './App.css';
import api from './utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitty: []
    }
  }

  searchAPI = () => {
    api.search()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  
  render() {
    this.searchAPI()
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
