import React, { useState } from 'react';
import axios from 'axios';
import './MainCSS.css';
import { Link } from 'react-router-dom';

const AddMovieForm = () => {
  const [movie, setMovie] = useState({
    id: '',
    name: '',
    theatreName: '',
    releaseDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/addMovie', movie) // Replace with your backend API endpoint
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message or redirect to another page
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">MovieBook App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/AddData">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/AddMovieForm">Add Movie</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AllMovie">Movies List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DeleteMovie">Delete Movie</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AllTicket">Bookings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 
    <div className="container-fluid ">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={movie.id}
            onChange={handleChange}
         required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={movie.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="theatreName">Theatre Name:</label>
          <input
            type="text"
            className="form-control"
            id="theatreName"
            name="theatreName"
            value={movie.theatreName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="text"
            className="form-control"
            id="releaseDate"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <footer>
            <p>&copy; {new Date().getFullYear()} Movie Booking App</p>
          </footer>
    </div>
    </div>
  );
};

export default AddMovieForm;