import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    return (
      <div className="bomb">
        {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    )
  }
}
