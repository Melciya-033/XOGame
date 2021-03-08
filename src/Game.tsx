import React from 'react';
import styled from 'styled-components';
import { BoardState, useGameState, Value, } from './GameState';
import './Game.css';

type LayoutProps={
  gap :number,
}

const Row =styled.div<LayoutProps>`
display: flex;
flex-direction:row;
gap:${(props)=>props.gap}px;
`;

const Column =styled.div<LayoutProps>`
display: flex;
flex-direction: column;
gap:${(props)=>props.gap}px;
`;

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
type BoardProps={
  board:BoardState;
  onClick:(square:number)=>void;
};
function Board({board,onClick}:BoardProps){

const createProps =(square:number):SquareProps=>{
  return{
    value:board[square],

    onClick:()=>onClick(square),
  };

};
  return(
    <Column gap={0}>
 <Row gap={0} >
 <Square {...createProps(0)}/>
 <Square {...createProps(1)}/>
 <Square {...createProps(2)}/>
 </Row>

 <Row gap={0} >
 <Square {...createProps(3)}/>
 <Square {...createProps(4)}/>
 <Square {...createProps(5)}/>
 </Row>

 <Row gap={0} >
 <Square {...createProps(6)}/>
 <Square {...createProps(7)}/>
 <Square {...createProps(8)}/>
 </Row>

 </Column>
  );
}

const StyledSquare= styled.button`
width:34px;
height:34px;
background:#fff;
border: 1px solid #999;
padding:0;
fontsize:24px;
fontweight:bold;
`;
 type LogProps={
   history:BoardState[],
   jumpTo:(step:number)=>void,
 }
function Log(props:LogProps){
  return(
    <ol>
      {props.history.map((_,index)=>{
        return(
      <li  key={index}>
        <button className="History" onClick={()=>props.jumpTo(index)}>Go to {index ===0?'start':`move #${index}`}
        </button></li>
        );
      })}
      </ol>
  )
  }

type SquareProps={
  value: Value,
  onClick:()=>void,  
}
function Square(props:SquareProps)
{
  return(
    <StyledSquare className="square" data-pro={props.value} onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  )
}


export default Game;
