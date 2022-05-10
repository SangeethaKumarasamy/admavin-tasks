import React from 'react';
import Box from './Box';
import "./styles.css";


const Tictactoe = () => {
  return (
    <div className="header">
        <div className="header-text">
            Tic Tac Toe
        </div>
        <div className="row">
            <p>x</p>
            <p>x</p>
            <p>x</p>
        </div>
        <div className="row">
            <p>x</p>
            <p>x</p>
            <p>x</p>
        </div>
        <div className="row">
            <p>x</p>
            <p>x</p>
            <p>x</p>
        </div>
    </div>
  )
}

export default Tictactoe