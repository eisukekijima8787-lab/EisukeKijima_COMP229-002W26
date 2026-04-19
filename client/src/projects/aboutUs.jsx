import React from 'react'
import aboutPicture2 from '../assets/aboutPicture2.jpg'

export default function User() {
  return (
    <div style = {{textAlign: 'left', padding: '10px'}}>
      <h1>About Me</h1>
        <img src={aboutPicture2} alt="Momentos" style={{width: '5%', borderRadius: '5px'}} />
      <p>12/11/2025 - Momentos</p>
    </div>
  );
}