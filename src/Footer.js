import React from 'react';
import './YourComponent.css'; 
import { FaPhoneAlt, FaFacebook, FaGlobe } from 'react-icons/fa';


const Footer = () => {
    

      const alt = {
        color: 'white',
       
       
      }
      
  return (
   
    <footer className="footer-container d-flex"  >
        <div style={alt} >
         <FaPhoneAlt size={20} color="white" />
         <a >Toll free 1800 200 1234</a>
      </div>

      <div style={alt}>
        <FaFacebook size={20} color="white" />
        <a  >www.facebook.com/cripumps</a>
        </div>
      
        <div style={alt} >
        <FaGlobe size={20} color="white" />
        <a  >www.crigroups.com </a>
        </div>
    </footer>
  );
};

export default Footer;

