import React from 'react';
// import About from './components/About';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4">
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#fff3e0', // Optional background color
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#ff7043', // Optional text color
          fontSize: '1.5rem',
        }}
      >
        Home
      </Link>
      <Link
        to="/About"
        style={{
          textDecoration: 'none',
          color: '#ff7043', // Optional text color
          fontSize: '1.5rem',
        }}
      >
        About
      </Link>
    </div>
    </nav>
  );
};

export default Navbar;
