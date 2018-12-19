import React, { Component } from 'react';
import './App.css';
import Photo from './components/photo'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: []
    }
  }


/* Call the function when VRDOM is mount and ready*/

  componentDidMount() {
    this.getData()
  }

/* Create a function that get fake api data*/


  getData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => this.setState({
        photo: json
      }))
  }




  render() {
    return (
      <div>
        <Header />
        <div className="container">
        {/* Map data on component Photo with a simple.... ;)..... iif condition  */}
        {
          this.state.photo.map((item, index) => {
            if (index < 10) {
              return <Photo key={'photo-id' + index} albumId={item.albumId} id={item.id} title={item.title} url={item.url} thumbnailUrl={item.thumbnailUrl} />
            }
          }
          )
        }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;


