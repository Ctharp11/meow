import React from 'react';
import '../App.css';

const ListItem = props =>
    <div>
        {props.results.map(data => {
            let media = data.media;
            let photos = [];
                  if (media.photos) {
                    let photo = media.photos.photo[0].$t;
                    photos.push(photo);
                  } else {
                    media = {photo: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg'}
                    photos.push(media.photo);
                  }
            return (
            <ul className="list-group" key={this.id}>
                <li className="list-group-item name" key={this.id}>
                    <p> Name: {data.name.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p>  Age: {   data.age.$t   }    { "     " }  Sex: {   data.sex.$t   }  { "     " } Breed: {data.breeds.breed.$t}  </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.description.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <img className="img-cat" alt="cat" src={photos}/>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.contact.phone.$t} {data.contact.email.$t} {data.contact.city.$t}, {data.contact.state.$t}  </p>
                </li>
            </ul>
            )
        })}
    </div>

export default ListItem;