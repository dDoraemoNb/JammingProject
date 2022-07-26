import React from "react";
import "../Track/Track.css";


const Track = (props) => {
  const { onAdd, onRemove, isRemoval, track } = props

  const addTrack=()=>{
    onAdd(track)
  }

  const removeTrack=()=>{
    onRemove(track)
  }


  const Action =()=>{
    if(isRemoval){
      return <button className="Track-action"onClick={removeTrack}>-</button>
    }else{
      return <button className="Track-action"onClick={addTrack}>+</button>
    }
  }

  return (
    <div className="Track">
        <div className="Track-information">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
        </div>
        {Action()}
    </div>
  );
};

export default Track;