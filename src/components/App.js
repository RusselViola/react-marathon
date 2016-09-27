import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongList from './SongList';
import SelectedSong from './SelectedSong'

const data = {
  playlists: [ {
      id: 1,
      name: 'Workout Playlist',
      songs: [2]
    },
    {
      id: 2,
      name: 'Indie Rock Playlist',
      songs: [1, 3]
    }
  ],
  songs: [
    {
      id: 1,
      name: 'The Mariner\'s Revenge Song',
      artist: 'The Decemberists',
      album: 'Picaresque',
    },
    {
      id: 2,
      name: 'Countdown',
      artist: 'Beyoncé',
      album: '4',
    },
    {
      id: 3,
      name: 'Barnacle Goose',
      artist: 'Born Ruffians',
      album: 'Red Yellow and Blue',
    }

  ],
  selectedPlaylistId: 2,
  selectedSongId: 3
};

let selectedPlaylistSongIds = data.playlists[data.selectedPlaylistId-1].songs;

function filterById(obj) {
  return selectedPlaylistSongIds.includes(obj.id);
}

let selectedSong = data.songs[data.selectedSongId-1];

let selectedPlaylistSongs = data.songs.filter(filterById);


let handleButtonClick=event => {alert("Song was clicked")}

const App = props => {
  return (
    <div className="App">
      <div className="PlaylistCollection columns small-4">
        <PlaylistCollection
          playlists={data.playlists}
          playlistId={data.selectedPlaylistId}
        />
      </div>
      <div className="SongList columns small-4">
        <SongList
         songlist={selectedPlaylistSongs}
         songId={data.selectedSongId}
         handleButtonClick = {handleButtonClick}
        />
      </div>
      <div className="SelectedSong columns small-4">
        <h4>Selected Song</h4>
        <SelectedSong
        song={selectedSong}
        />
      </div>
    </div>
  );
};

export default App;
