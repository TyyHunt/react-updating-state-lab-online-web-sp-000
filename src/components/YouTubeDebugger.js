import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  updateResolution = () => {
    this.setState(
      video: {
        ...this.state.video,
        resolution: '720p'
      }
    })
  }

  render() {
    return (
      <button class='bitrate' onClick={this.updateBitrate} />
      <button class='resolution' onClick={this.updateResolution} />
    )
  }
}
