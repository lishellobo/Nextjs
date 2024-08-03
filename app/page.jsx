import React from 'react';
import Card from '../components/card'; 
import Button from '../components/Button'; 

const products = [
  {
    imageSrc: 'https://i.redd.it/4y11iroxuhf61.jpg', 
    name: 'Kitty for Sale',
    buttonText: 'Adopt me pwease',
  },
  {
    imageSrc: 'https://shorturl.at/TeYq0', 
    name: 'Doggie for Sale',
    buttonText: 'Omagawd adopt me uwu',
  },
  {
    imageSrc: 'https://shorturl.at/XnYX7', 
    name: 'Lizard for Sale',
    buttonText: 'Mr. Idiot u better adopt me',
  },
];

const Page = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: 'url(https://shorturl.at/JneQf)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl font-bold text-center text-white bg-black bg-opacity-60 p-4 rounded-lg hover:bg-opacity-80">
        Welcome to AniStore!
      </h1>
      <p className="mt-6 text-lg text-center text-white bg-gray-800 bg-opacity-70 p-4 rounded-md shadow-lg hover:bg-opacity-90">
        Get your fav ANIMALS!
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            imageSrc={product.imageSrc}
            name={product.name}
            buttonText={product.buttonText}
            onButtonClick={() => alert(`Clicked ${product.name}`)} 
          />
        ))}
      </div>
      <Button className="mt-8">YOU CAN ADOPT ALL OF US hehehe</Button>
    </div>
  );
};

export default Page;
