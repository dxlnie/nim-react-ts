import React from 'react';
import 'toothpick.css';

// interface Props{
//   selected:boolean
// }

function toothpick(selected:boolean) {
  return (
    <div className="toothpick">
      <img src={selected?"./remove.png":"./toothpick.png"}></img>
      
    </div>
  );
}

export default toothpick;