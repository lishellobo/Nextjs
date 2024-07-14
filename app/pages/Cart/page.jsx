import React from 'react';

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-center text-green-600 bg-gray-200 p-4 hover:bg-gray-300 rounded-md">Cart</h1>
      <p className="mt-6 text-lg text-left text-gray-800 bg-white p-4 rounded-md shadow-lg">
        View the items in your shopping cart.
      </p>
    </div>
  );
};

export default Cart;
