import React from 'react';

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand">Clicky Game</span>
    <span>
      <span>Score : {props.score}</span>
      <br/>
      <span>High Score : {props.highScore}</span>
    </span>
  </nav>
);

export default Nav;