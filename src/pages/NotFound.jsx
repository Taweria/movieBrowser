import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

const NotFound = () => {
  return (
    <div>
    <Header />
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    <Footer />
    </div>
  );
};

export default NotFound;