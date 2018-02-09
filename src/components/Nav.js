import React from 'react';
import ListContainer from './ListContainer';
import SittersContainer from './SittersContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../App.css';

const Nav = () => {

    return (
  <div>
    
    <Router>
    <div>
       <div className="nav"> 
            <h1 className="nav-title--main"> Meow </h1>
            <h3 className="nav-title--sub"> The Purrfect Place for Cat Lovers </h3>

            <ul className="nav-list">
                <li><Link className="nav-list-item" to="/">Home</Link></li>
                <li><Link className="nav-list-item" to="/sitters">Sitters</Link></li>
            </ul>

      </div>

      <Route exact path="/" component={ListContainer}/>
      <Route path="/sitters" component={SittersContainer}/>
    </div>
  </Router>
  </div>
  )
}

export default Nav;