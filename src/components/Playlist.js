import React from 'react';


const Playlist = props => {
  let selectedClass= "";
  if (props.selectedPlaylistId===props.id){
    selectedClass="selected"
  }
  return (
    <li className={selectedClass}>{props.name}</li>
  );
}

export default Playlist;
