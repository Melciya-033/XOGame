import React from 'react';
import { useGameState, } from './GameState';
import './Game.css';
import { Log } from './Log';
import { Board } from './Board';
import { Row, Column } from './Layout';

function Game() {
  const{
      gameState,
      current,
      xIsNext,
      winner,
      handleClick,
      jumpTo,
      reset,
  }=useGameState();

  return (
    <div className="Game">
    <Row gap={20}> 
 
        <Column gap={20}>
       
       <Board board={current}  onClick ={handleClick}  />
      
      <button className="Reset" onClick ={reset}>Reset</button>

       </Column>
       <Column gap={20}> 
       <div className="Result">{
       winner
       ? `Winnner: ${winner}`
       : `Next player: ${xIsNext ? 'X' :'O'}`
       }
        </div>
        
<Log history={gameState.history}jumpTo={jumpTo}/>
</Column>
    </Row>
    </div>
  );
}
export default Game;
