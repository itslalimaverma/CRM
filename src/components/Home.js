// client/src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "../styles/Home.css";

const Home = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Mini CRM</h1>
      <nav>
        <ul>
          <li><Link to="/audience">Create Audience</Link></li>
          <li><Link to="/campaigns">View Campaigns</Link></li>
        </ul>
      </nav>
      <button onClick={signOut} className="logout-button">Sign Out</button>
    </div>
  );
};

export default Home;
