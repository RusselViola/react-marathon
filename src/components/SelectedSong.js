import React from 'react';

const SelectedSong = props => {
  return(
    <ul>
      <li> Title: {props.song.name} </li>
      <li> Artist: {props.song.artist} </li>
      <li> Album: {props.song.album} </li>
    </ul>
  )
}

export default SelectedSong;
