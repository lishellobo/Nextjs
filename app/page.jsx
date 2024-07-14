import React from 'react';

const Page = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: 'url(https://wallpapercave.com/wp/wp7495755.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl font-bold text-center text-white bg-black bg-opacity-60 p-4 rounded-lg hover:bg-opacity-80">
        Lishel ^w^
      </h1>
      <p className="mt-6 text-lg text-left text-white bg-gray-800 bg-opacity-70 p-4 rounded-md shadow-lg hover:bg-opacity-90">
        My name is Lishel Lobo. I'm an engineering student at SJEC. I haven't really found what drives me yet, but I'm open to exploring different interests and experiences to uncover my true passion. In my free time, I love to organize and clean, read books, try different types of coffee, and learn something new. Currently, I'm focused on expanding my skills in Python, C++, Linux (especially ricing the i3), and networking. In the long term, I hope to integrate machine learning and cybersecurity to build something cool and contribute to open-source projects, possibly creating something of my own. 
       
      </p>
      <p className="mt-6 text-lg text-center text-white bg-gray-800 bg-opacity-70 p-4 rounded-md shadow-lg hover:bg-opacity-90">
      Technically, I have learned CSS, JavaScript, C++, Python, C, a bit of PHP, SQL, Linux customization, and some concepts of DSA. Beyond technical skills, I've learned to be kind, manage tha ings independently, and not mind what others think.
      </p>
    </div>
  );
};

export default Page;
