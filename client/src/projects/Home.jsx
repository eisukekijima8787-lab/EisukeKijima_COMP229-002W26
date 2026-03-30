/*import Counter from "./counter";
import ControlledComponent from "./controlledComponent";
import Validate from "./validate";

function Home() {
     return (
          <div>
               <p>Hello World!</p>
               <Counter />
               <ControlledComponent />
               <Validate />
          </div>
     );
}

export default Home;*/

import React from 'react'
import aboutPicture1 from '../assets/aboutPicture1.jpg'

export default function Home() {
  return (
    <div style = {{textAlign: 'left', padding: '10px'}}>
      <h1>Home</h1>
        <img src={aboutPicture1} alt="Jollibee" style={{width: '5%', borderRadius: '5px'}} />
      <p>03/07/2026 - Jollibee Logo</p>
    </div>
  );
}