import React from 'react';
import 'panel.css';
import toothpick from './toothpick';

// interface Props{
//   selected:boolean
// }
function createToothPickRow(count:number){
  const row=[]
  for (let i=0;i<count;i++){
    row.push(toothpick)
  }
  return row
}

function panel() {

  const firstRow = createToothPickRow(3)
  const secondRow = createToothPickRow(5)
  const thirdRow = createToothPickRow(7)


  return (
    <div className="toothpick">
      <div>
        { firstRow }
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
      
      
    </div>
  );
}

export default panel;