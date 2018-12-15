
import React from 'react';

const Card = props => {

    return (
      <img 
        onClick={() => props.handleClick(props.id)} 
        id={props.id}
        src={props.src} 
        alt={props.alt} 
        className="img-thumbnail"
        style={{
          width: '170px',
          margin: '1vw',
        }} 
      />
    );

};

export default Card;