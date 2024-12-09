import React from 'react';
import{ Link } from 'react-router-dom';

const Navbar: React.FC=() => {
  return(
  <nav className="navbar">
    <div className="navbar-header">
      <h1>Michelle Lam ･ᴗ･</h1>
      <p className="pronouns">(she/her)</p>
    </div>
    <ul>
        <li><Link to="/" className="button">Home</Link></li>
        <li><Link to="/about-page" className="button">About</Link></li>
        <li><Link to="/experience-page" className="button">Experience</Link></li>
        <li><Link to="/hobby-page" className="button">Hobby</Link></li>
        <li><Link to="/contact-page" className="button">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
