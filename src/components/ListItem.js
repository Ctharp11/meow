import React from 'react';
import '../App.css';

// class ListItem extends Component{
//     constructor(props) {
//         super(props) 
//         this.state = {
//             name: []
//         }
//         this.handleProps = this.handleProps.bind(this);
//     }

//     componentWillMount() {
//         this.handleProps();
//     }

//     handleProps () {
//         console.log(this.props)
//         this.props.results.map(data => {
//             var name = data.name.$t;
//             console.log(name)
//             this.setState({name});
//             return name
//         })
//     }
//     render () {
//         console.log(this.props)

//         return (
//             <ul> 
//                 <li> ktty fno</li>
//             </ul>
//         )
//     }      
// }

const ListItem = props =>
    <div>
        {props.results.map(data => {
            let media = data.media;
            let photos = [];
                  if (media.photos) {
                    let photo = media.photos.photo[0].$t;
                    photos.push(photo);
                  } else {
                    media = {photo: 'https://www.pexels.com/photo/adorable-animal-animal-world-cat-209037/'}
                    photos.push(media.photo);
                  }
            return (
            <ul key={this.id}>
                <li className="list-group-item" key={this.id}>
                    <p> {data.name.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.age.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.breeds.breed.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.description.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <img alt="cat" src={photos}/>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.sex.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.contact.phone.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.contact.email.$t} </p>
                </li>
                <li className="list-group-item" key={this.id}>
                    <p> {data.contact.city.$t}, {data.contact.email.$t} </p>
                </li>
            </ul>
            )
        })}
    </div>

export default ListItem;