import React from 'react';
import './row.css';
import Toothpick from './toothpick';

interface Props{
    count:number 
    index:number
    takeAway:Function
    activePlayer:undefined|string
}

function Row({count,index,takeAway,activePlayer}:Props) {
   const row = Array(count).fill(index)

   const takeRow =()=>{
       return takeAway(index)
   }

  return (
    <div className="row">
        {
            row.map((item,index)=>{
                return  (
                    <div key={index}>
                        <Toothpick  takeRow={()=>{return takeRow()} } activePlayer={activePlayer} /> 
                    </div>
                )
            })
        }
      
    </div>
  );
}

export default Row;