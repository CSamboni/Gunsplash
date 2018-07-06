import React, { Component } from 'react';
import './App.css';
import './firebase/firebase';
import Gallery from './component/gallery';


class App extends Component {
  
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <Gallery />
    );
  }
}

export default App;
