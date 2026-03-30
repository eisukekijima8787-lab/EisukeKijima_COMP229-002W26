import React from 'react';
import aboutPicture7 from '../assets/aboutPicture7.jpg'

export default function Contact() {
    return (
        <div style = {{textAlign: 'left', padding: '10px'}}>
            <h1>Contact</h1>
                <img src={aboutPicture7} alt="College" style={{width: '5%', borderRadius: '5px'}} />
            <p>03/16/2026 - Centennial College</p>
        </div>
    );
}