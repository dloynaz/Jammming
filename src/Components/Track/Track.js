import React from 'react'
import './Track.css'

export class Track extends React.Component {
  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.playAction = this.playAction.bind(this);
  }
  playTrack(){
    this.props.onPlay(this.props.track.id);
  }
  addTrack(){
    this.props.onAdd(this.props.track);
  }
  removeTrack(){
    this.props.onRemove(this.props.track);
  }
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action" onClick={this.removeTrack}>-</button>
    }
    else if (!this.props.isRemoval) {
      return <button className="Track-action" onClick={this.addTrack}>+</button>
    }
  }
  playAction() {
    if (this.props.isRemoval) {
      return null
    }
    else if (!this.props.isRemoval) {
      return <button className="Track-action" onClick={this.playTrack}>Play</button>
    }

  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
        <button className="Track-action">{this.playAction()}</button>
      </div>
    )
  }
}

