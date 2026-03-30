/*import React from 'react';
import photo10 from '../assets/photo10.jpg'
import photo11 from '../assets/photo11.jpg'
import photo12 from '../assets/photo12.jpg'
import RowComponent from './rowComponent';

const data = [
     {
          imagePath: photo10,
          title: 'Title 01',
          text: 'This is the first item'
     },
     { imagePath: photo11, title: 'Title 02', text: 'This is the second item' },
     { imagePath: photo12, title: 'Title 03', text: 'This is the third item' },
];

export default function Project() {
     return (
          <>
               <h2>My Projects</h2>
               <div>
                    {data.map((itemObj, index) => (
                         <RowComponent key={index} item={itemObj} />
                    ))}
               </div>
          </>
     );
}*/





import React from 'react';
import aboutPicture3 from '../assets/aboutPicture3.jpg'
import aboutPicture4 from '../assets/aboutPicture4.jpg'
import aboutPicture5 from '../assets/aboutPicture5.jpg'

export default function Project() {
  return (
    <div style = {{textAlign: 'left', padding: '10px'}}>
      <h1>Project #1</h1>
        <img src={aboutPicture3} alt="Mountain" style={{width: '5%', borderRadius: '5px'}} />
      <p>01/12/2025</p>

      <h1>Project #2</h1>
        <img src={aboutPicture4} alt="Lake" style={{width: '5%', borderRadius: '5px'}} />
      <p>10/04/2025 - Niagara-on-the-lake</p>

      <h1>Project #3</h1>
        <img src={aboutPicture5} alt="View" style={{width: '5%', borderRadius: '5px'}} />
      <p>12/30/2025 - Empire State Building</p>
    </div>
  );
}