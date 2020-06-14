import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChessboardJs from 'react-chessboardjs-wrapper'

export default props => <ChessboardJs {...props} />
class App extends React.Component{
  render() {
    return (
      <ChessboardJs
        animate // boolean, chessboard.js piece animations
        blackSquareColour="steelblue" // or hex
        border="10px solid #d3d3d3" // css border property
        onInitBoard={(board, boardId) => this._board = board} // callback fn, gets passed the chessboard.js board object, and the unique id
        resize // effective if width prop is a string
        whiteSquareColour="aliceblue" // or hex
        width="80%" // string (%) || number (px)
      />    
    );
  }
}