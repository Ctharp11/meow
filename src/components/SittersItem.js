import React from 'react';
import '../App.css';

const SittersItem = props =>
    <div>
        {props.sitters.sitters.map(data => {
            console.log(data);
            
            return (
            <ul className="list-group" key={this.id}>
                {console.log(data)}
                <li className="list-group-item name" key={this.id}>
                    <p> {data.name} </p>
                </li>
                <li className="list-group-item name" key={this.id}>
                    <img className="img" alt="sitter" src={data.photo} />
                </li>
                <li className="list-group-item name" key={this.id}>
                <p> Rating: {data.rating} Votes: {data.votes} </p> 
                </li>
                <li className="list-group-item name" key={this.id}>
                <p> Time Avaliable: {data.timeAvailable}</p> 
                </li>
                <li className="list-group-item name" key={this.id}>
                <p> Call to contact: 555-5555</p> 
                </li>
            </ul>
            )
        })}
    </div>

export default SittersItem;