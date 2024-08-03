import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#ffffff' }}>
      <h1 style={{ fontSize: '3rem', color: '#a49cdb' }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#555' }}>Page Not Found</p>
      <Link href="/" passHref>
        <span style={{ color: '#a49cdb', fontSize: '1.2rem', textDecoration: 'underline' }}>
          Go Back to Home
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
