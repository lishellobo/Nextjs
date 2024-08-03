import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#f8f9fa', 
    padding: '10px',
  };

  const listStyle = {
    listStyleType: 'none', 
    padding: '0', 
    margin: '0', 
    display: 'flex', 
  };

  const itemStyle = {
    marginRight: '20px', // Space between items
  };

  const linkStyle = {
    textDecoration: 'none', 
    color: '#a49cdb', 
    fontWeight: 'bold', 
  };

  return (
    <nav style={navbarStyle}>
      <ul style={listStyle}>
        <li style={itemStyle}>
          <Link href="/" passHref>
            <span style={linkStyle}>Home</span>
          </Link>
        </li>
        <li style={itemStyle}>
          <Link href="/about" passHref>
            <span style={linkStyle}>About</span>
          </Link>
        </li>
        <li style={itemStyle}>
          <Link href="/contact" passHref>
            <span style={linkStyle}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
