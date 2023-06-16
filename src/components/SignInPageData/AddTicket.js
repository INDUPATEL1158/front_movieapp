import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './MainCSS.css';
const AddTicket = () => {
    
  const [ticket, setTicket] = useState({
    id: '',
    movieId: '',
    theatreName: '',
    numTickets: 0,
    seatNumbers: [],
    status: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "seatNumbers") {
      const seatNumbers = value.split(",").map((num) => num.trim()); // Split the input string and trim whitespace
      setTicket((prevTicket) => ({ ...prevTicket, [name]: seatNumbers }));
    } else {
      setTicket((prevTicket) => ({ ...prevTicket, [name]: value }));
    }
  };
 /* 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prevTicket) => ({ ...prevTicket, [name]: value }));
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/addTicket', ticket) // Replace with your backend API endpoint
      .then((response) => {
        console.log(response.data);
        alert("Ticket booked!!!");
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

    <div className="container-fluid">
      <h1>Add Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={ticket.id}
            onChange={handleChange}
          required/>
        </div>
        <div className="form-group">
          <label htmlFor="movieId">Movie ID:</label>
          <input
            type="text"
            className="form-control"
            id="movieId"
            name="movieId"
            value={ticket.movieId}
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
            value={ticket.theatreName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numTickets">Number of Tickets:</label>
          <input
            type="number"
            className="form-control"
            id="numTickets"
            name="numTickets"
            value={ticket.numTickets}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seatNumbers">Seat Numbers:</label>
          <input
            type="text"
            className="form-control"
            id="seatNumbers"
            name="seatNumbers"
            value={ticket.seatNumbers}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={ticket.status}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Ticket</button>
      </form>
      <footer>
            <p>&copy; {new Date().getFullYear()} Movie Booking App</p>
          </footer>
    </div>
    </div>
  );
};

export default AddTicket;
