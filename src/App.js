import React from 'react';
import ListContainer from './components/ListContainer';
import SittersContainer from './components/SittersContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => {

    return (
  <div>
    <ListContainer />
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sitters">Sitters</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={ListContainer}/>
      <Route path="/sitters" component={SittersContainer}/>
    </div>
  </Router>
  </div>
  )
}

export default App;
