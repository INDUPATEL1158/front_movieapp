import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './MainCSS.css';
import { Link } from 'react-router-dom';

const AllMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/all'); // Replace with your backend API endpoint
      setMovies(response.data);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message
    }
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

    <div className="container-fluid">
      <h1>All Movies</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Theatre Name</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.theatreName}</td>
              <td>{movie.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <footer>
            <p>&copy; {new Date().getFullYear()} Movie Booking App</p>
          </footer>
    </div>
    </div>
  );
};

export default AllMovie;
