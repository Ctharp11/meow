import React, {Component} from 'react';
import sitters from '../model/sitters.json';
import SittersItem from './SittersItem';

class SittersContainer extends Component {
    constructor () {
        super();
        this.state = {
            sitters
        }
    }

    render() {
        return (
            <div className="container"> 
              <h2 className="container-head"> Find a Cat Sitter</h2>
              <SittersItem sitters={this.state.sitters}/>
            </div>
        )
    }

}

export default SittersContainer;