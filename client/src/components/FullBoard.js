import React from 'react';
import BoardList from './BoardList';
import Tokens from './Tokens';

export default function FullBoard() {
  return (
    <div className="full-board">
        FullBoard
        <div>
          <Tokens />
          <BoardList />
        </div>
    </div>
  )
}
