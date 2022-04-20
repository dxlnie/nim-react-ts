import React from 'react';
import 'panel.css';

// interface Props{
//   selected:boolean
// }

function panel() {
  return (
    <div className="toothpick">
      <img src={selected?"./remove.png":"./toothpick.png"}></img>
      
    </div>
  );
}

export default toothpick;