import React from "react";
import "../Playlist/Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const { onNameChange, onSave, playlistName, playlistTracks, removeTrack } = props
  const handleNameChange = (event) => {
    onNameChange(event.target.value)
  }
  return (
    <div className="Playlist">
        <input defaultValue={playlistName} onChange={handleNameChange} />
        <TrackList tracks={playlistTracks} onRemove={removeTrack} isRemoval={true} />
        <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;