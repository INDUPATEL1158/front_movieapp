import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menus.css';
import './MainCSS.css';
import axios from 'axios';

const AllTicket = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = () => {
    axios
      .get('http://localhost:8080/allTicket') // Replace with your backend API endpoint
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (<div>   <div>
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
      <h1>Ticket List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie ID</th>
            <th>Theatre Name</th>
            <th>Number of Tickets</th>
            <th>Seat Numbers</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.movieId}</td>
              <td>{ticket.theatreName}</td>
              <td>{ticket.numTickets}</td>
              <td>
                {Array.isArray(ticket.seatNumbers)
                  ? ticket.seatNumbers.join(', ')
                  : 'N/A'}
              </td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default AllTicket;
