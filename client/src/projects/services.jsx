/*import React from 'react';
import photo08 from '../assets/photo08.jpg'
import photo09 from '../assets/photo09.jpg'
import RowComponent from './rowComponent';

const data = [
     { imagePath: photo08, text: 'This is the first Service Offered' },
     { imagePath: photo09, text: 'This is the second Service Offered' },
];

export default function Services() {
     return (
          <>
               <h2>My Services</h2>
               <div>
                    {data.map((itemObj, index) => (
                         <RowComponent key={index} item={itemObj} />
                    ))}
               </div>
          </>
     );
}*/





import React from 'react';
import aboutPicture6 from '../assets/aboutPicture6.jpg'

export default function Service() {
  return (
    <div style = {{textAlign: 'left', padding: '10px'}}>
      <h1>Service</h1>
        <img src={aboutPicture6} alt="Nintendo" style={{width: '5%', borderRadius: '5px'}} />
      <p>03/06/2026 - Nintendo Shop</p>
    </div>
  );
}