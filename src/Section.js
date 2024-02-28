import React from 'react';
import './YourComponent.css';  
import img2 from './Images/1.png'
import img3 from './Images/2.png'



const Section = () => {
    const containerStyle = {
        backgroundColor: 'lightYellow', // Set your desired color here
        
      };
  return (
    <>
    <div className="section-container " style={containerStyle}>
      <div className="left-side" >
        <img src={img2} alt="Left Image" width="100%" />
      </div >
      <div className="right-side">
        <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
        <ul>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img src={img3} alt="Right Image" className='img3 my-2' width="100%"/>
        <h6 className='para  my-2'>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h6>
      </div>
    </div>


</>
  );
};

export default  Section;

