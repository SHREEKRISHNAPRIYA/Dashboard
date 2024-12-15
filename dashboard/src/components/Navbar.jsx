import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Business Execution Dashboard</h1>
      <ul>
        <li>Home</li>
        <li>Analytics</li>
        <li>Projects</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
