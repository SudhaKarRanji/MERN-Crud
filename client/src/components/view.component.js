import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.gender}</td>
      <td>{props.user.phone}</td>
      <td>{props.user.date.substring(0,10)}</td>
      <td>
        <Link to={"/user/update/"+props.user._id}>edit</Link> | <a href="/user/delete" onClick={() => { props.delete(props.user._id) }}>delete</a>
      </td>
    </tr>
)
export default class view extends Component {
    constructor(props) {
      super(props);
  
      this.delete = this.delete.bind(this);
  
      this.state = {user: []};
    }
    
componentDidMount() {
    axios.get('http://localhost:5000/user')
      .then(response => {
        this.setState({ user: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  delete(id) {
    axios.delete('http://localhost:5000/user/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      user: this.state.user.filter(el => el._id !== id)
    })
  }

  view() {
    return this.state.user.map(user => {
      return <User user={user} delete={this.delete} key={user._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>User List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.view() }
          </tbody>
        </table>
      </div>
    )
  }
}