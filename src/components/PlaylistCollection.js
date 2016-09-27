import React from 'react'
import Playlist from './Playlist'

const PlaylistCollection = props => {
  let playlists = props.playlists.map(playlist => {
    return(
      <Playlist
        key={playlist.id}
        name={playlist.name}
        songs={playlist.songs}
        selectedPlaylistId={props.playlistId}
        id={playlist.id}
      />
    )
  })
  
  return(
    <div>
      <ul> {playlists} </ul>
    </div>
  )
};

export default PlaylistCollection;
