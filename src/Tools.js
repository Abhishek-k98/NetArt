import React from 'react';
import img4 from './Images/3.png'

const Tools = () => {

  const rootFontStyle = {
    textAlign: 'center',
    fontSize : '15px'
};

  const fooHr ={
    height: '4px',
    color: '#dc143c'
  }
  const FLUID ={
    textAlign: 'center'
  }

  return (
    <div className="other-container my-6">
      
<h6 style={rootFontStyle}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h6>

<div className='container'>
<img src={img4} alt="Your Image" width="100%" />
</div>
<h5 style={rootFontStyle}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h5>
<hr style={fooHr} />

  <h4 style={FLUID}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
   <p style={FLUID} className='para my-4'><strong>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</strong></p>

</div>
  );
};

export default Tools;
