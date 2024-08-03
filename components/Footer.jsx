import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f9fa', // Light pastel background color
    padding: '10px',
    textAlign: 'center', // Center-align text
    marginTop: '20px', // Add margin-top to separate from content
  };

  const listStyle = {
    listStyleType: 'none', // Remove bullets
    padding: '0', // Remove padding
    margin: '0', // Remove margin
    display: 'flex', // Horizontal layout
    justifyContent: 'center', // Center items horizontally
  };

  const itemStyle = {
    marginRight: '20px', // Space between items
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: '#a49cdb', // Pastel purple color
    fontWeight: 'bold', // Optional: make text bold
  };

  return (
    <footer style={footerStyle}>
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
      <p style={{ marginTop: '10px' }}>&copy; {new Date().getFullYear()} My Next.js Application. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
