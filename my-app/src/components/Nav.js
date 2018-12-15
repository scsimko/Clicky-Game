import React from 'react';

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <span className="navbar-brand"><font color="#FF8C00">Cleveland Browns - Clicky Game</font></span>
    <span>
      <span><font color="#FF8C00">Score : {props.score}</font></span>
      <br/>
      <span><font color="#FF8C00">High Score : {props.highScore}</font></span>
    </span>
  </nav>
);

export default Nav;