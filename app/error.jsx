'use client'; //Error Components must be CLient components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
       console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ color: '#a49cdb' }}>Something went wrong!</h2>
      <p style={{ color: '#555' }}>An unexpected error has occurred. Please try again later.</p>
      <button
        onClick={() => reset()}
        style={{
          backgroundColor: '#a49cdb',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  );
}
