import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }
      render() {
          return (
              <ul key={persons.toString()}>
              { this.state.persons.map(person => <div className="card" style={{'textAlign':'center', 'justifyContent':'center', 'diplay':'flex',}}>{person.name}</div>)}
              </ul>
          )
      }
}