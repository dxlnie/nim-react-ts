import React, { useState } from 'react';
import './panel.css';
import Row from './row';
import Player from './player';



function Panel() {

  const [ count,setCount] = useState(15)
  const [ currentIndex,setCurrentIndex] = useState<undefined|Number>()
  const [ activePlayer, setActivePlayer ] = useState<undefined|string>()
  const [ rerender,setRerender] =useState(0)

  const start = (player:string)=>{

    if (!activePlayer){
      setActivePlayer(player)
      setCount(15)
    }
    else{
      setActivePlayer( activePlayer==='游戏者1'?'游戏者2':'游戏者1' ) 
      setCurrentIndex(undefined)
    }
    
  }

  const takeAway = (rowIndex:number) =>{

    if (currentIndex){
      if(currentIndex!==rowIndex){
        alert('不能跨行！！！')
        return false
      }
    }
    else{
      setCurrentIndex( rowIndex ) 
    }
    

    setCount(count-1)



    if (count ===1){
      let winner = activePlayer==='游戏者1'?'游戏者2':'游戏者1' 
      alert(winner + '胜！！！')
      setRerender(rerender+1)
      setActivePlayer(undefined)
    }

    return true


  }

  return (
    <div className="panel" key={rerender}>
      <div>
        <Row count={3} index={1} takeAway={takeAway}  activePlayer={activePlayer} />

      </div>
      <div>
        <Row count={5} index={2} takeAway={takeAway}  activePlayer={activePlayer} />
        
      </div>
      <div>
        <Row count={7} index={3} takeAway={takeAway}  activePlayer={activePlayer} />
      </div>
      <div className='control'>
        <div>
          <Player name={'游戏者1'} start={start} activePlayer={activePlayer} />

        </div>
        <div>
          <Player name={'游戏者2'} start={start} activePlayer={activePlayer} />
        </div>
                
      </div>
      
      
    </div>
  );
}

export default Panel;