import React, { useState } from 'react';
import './toothpick.css';

interface Props{
  takeRow:Function
  activePlayer:undefined|string
}

function Toothpick( {takeRow,activePlayer}:Props ) {
  const [selected, setSelected] = useState(false);


  const takePick=()=>{

    if (!activePlayer){
      alert('请选一个游戏者开始')
      return
    }

    if ( takeRow() )
    {
      setSelected(true)
    } 
    


  }

  return (
    <div className="toothpick" onClick={()=>takePick()}>
      <img src={selected?"./remove.png":"./toothpick.png"}></img>
      
    </div>
  );
}

export default Toothpick;