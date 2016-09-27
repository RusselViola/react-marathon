import React from 'react';
import Song from './Song';

const SongList = props => {
  let songs = props.songlist.map(song => {
    let selectedSong = song.name
    if (props.songId === song.id){
      selectedSong = `* ${selectedSong}`
    }

    return(
      <Song
        key={song.id}
        name={selectedSong}
        artist={song.artist}
        album={song.album}
        handleButtonClick = {props.handleButtonClick}
      />
    )
  })
  
  return(
    <ul> {songs} </ul>
  );
};



export default SongList;
