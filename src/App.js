// App.js
import React, { Component } from 'react';
import Navbar from './Navbar';
import Section from './Section';
import Tools from './Tools';
import Footer from './Footer'

const App = () => {
  const containerStyle = {
    backgroundColor: 'lightgoldenrodyellow', // Set your desired color here
    
  };
 
  return (
    <div>
      <Navbar />
      
      <div style={containerStyle} >
      <Section/>
      
      <Tools/>
      <Footer/>
      </div>
    </div>
  );
};

export default App;
