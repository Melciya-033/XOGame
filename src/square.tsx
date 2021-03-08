import React from 'react';
import styled from 'styled-components';
import { Value } from './GameState';

const StyledSquare = styled.button`
width:34px;
height:34px;
background:#fff;
border: 1px solid #999;
padding:0;
fontsize:24px;
fontweight:bold;
`;
export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export function Square(props: SquareProps) {
  return (
    <StyledSquare className="square" data-pro={props.value} onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}
