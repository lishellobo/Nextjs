import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-5xl font-bold text-center text-blue-600 bg-yellow-200 p-4 hover:bg-yellow-300 rounded-lg">Home</h1>
      <p className="mt-6 text-lg text-left text-gray-700 bg-green-100 p-4 rounded-md shadow-lg hover:text-green-800">
        Welcome to the homepage of our e-commerce website.
      </p>
    </div>
  );
};

export default Home;
