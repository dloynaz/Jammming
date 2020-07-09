
import React from 'react'

export class Player extends React.Component {
    constructor(props){
        super(props)
        this.playTrack = this.playTrack.bind(this)
    }
    
    playTrack(){
      let Key = this.props.onPlay;
      return <iframe src={`https://open.spotify.com/embed/track/${Key}`} width="250" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    }
    render() {
        return <div>{this.playTrack()}</div>//<iframe src="https://open.spotify.com/embed/track/07zKyiXaa4npyT0GRvlqKw" width="250" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    }
}