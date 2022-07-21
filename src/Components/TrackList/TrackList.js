import React from "react";
import "../TrackList/TrackList.css";
import Track from'../Track/Track'

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {props.tracks.map(track => {
        return <Track track={track} key={track.id} onAdd={props.onAdd} isRemoval={props.isRemoval} onRemove={props.onRemove} />;
      })}
    </div>
  );
};


/* class TrackList extends React.Component{
  render(){
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track track={track} key={track.id} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} />
        })}
      </div>
    );
  }
}; */

export default TrackList;
