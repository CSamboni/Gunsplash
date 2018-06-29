import React, { Component } from 'react';
import './App.css';
import PersonList from './component/person';
import './firebase/firebase';


class App extends Component {
  
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <PersonList />
    );
  }
}

export default App;
