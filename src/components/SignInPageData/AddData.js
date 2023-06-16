import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menus.css';
import './MainCSS.css';
function AddData(){
    return (
        <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <header>
            <h1>Welcome to the Movie Booking App</h1>
          </header>
          <section>
            <p>Explore the latest movies and book your tickets online.</p>
          </section>
         
        </div>
        </div>
      );
}

export default AddData;