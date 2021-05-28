import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Crud Application</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/add" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/delete" className="nav-link">Delete User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/update" className="nav-link">Update User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}