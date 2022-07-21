import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../utils/Spotify";


const App = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName]=useState('playlistName');
  const [playlistTracks, setPlaylistTracks]=useState([]);
  
  const addTrack =(track)=>{
    let tracks = playlistTracks;
    if(tracks.includes(track)){
      return
    }
    setPlaylistTracks([...playlistTracks,track]);

    /* if(playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }else{
      let newPlaylistTrack = playlistTracks;
      setPlaylistTracks(newPlaylistTrack.push(track));
    } */
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((currentTrack)=> currentTrack.id !== track.id));

    //removes tracks from playlist

  };

  const updatePlaylistName= (name) => {
    setPlaylistName(name)
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map( (track) => track.id )
    Spotify.savePlaylist(playlistName, trackURIs)
    setPlaylistName('newPlaylist')
    setPlaylistTracks([])
  }

  const search  = async (term) => {
    const search = await Spotify.search(term)
    setSearchResults(search)
  }

  useEffect(() => {
    Spotify.getAccessToken()
  }, [])

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            removeTrack={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
