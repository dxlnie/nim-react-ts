
import './player.css';

interface Props {
    name:string
    activePlayer:undefined|string
    start:Function
}

function Player({name,activePlayer,start}:Props) {
  const notActivePlayer = ()=>{
    if (!activePlayer){
      return (
        <button onClick={()=>start(name)}>开始</button>
      )

    }
    else {
      return ''
    }
  }

  return (
    <div>
        <label>{name}</label>
        {
            activePlayer==name ? <button onClick={()=>start(name)}>{ activePlayer?'结束':'开始'}</button>:notActivePlayer()

        }
        
  </div>
  );
}

export default Player;