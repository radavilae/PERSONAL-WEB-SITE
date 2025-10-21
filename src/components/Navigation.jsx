import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav id="navbar">
      <ul id="menu-options">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bio">Bio</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
