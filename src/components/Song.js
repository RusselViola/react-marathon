import React from 'react';

const Song = props => {

  return(
    <li>
      <button type="button" onClick={props.handleButtonClick}>{props.name}</button>
    </li>
  )
}

export default Song;
