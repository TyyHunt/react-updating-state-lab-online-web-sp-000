import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  addClickAmount = () => {
    currentClicks = this.state.timesClicked + 1
    this.setState({
      timesClicked: currentClicks
    })
  }

  render() {
    return (
      <button onClick={this.addClickAmount}>{this.state.timesClicked}</button>
    )
  }
}
