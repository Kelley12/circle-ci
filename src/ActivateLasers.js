import React from 'react';

class ActivateLasers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {areLasersOn: false};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        areLasersOn: !prevState.areLasersOn
      }));
    }
  
    render() {
      return (
          <div>
            <p data-testid="laserState" id="laserState">{this.state.areLasersOn ? "Lasers Activated" : "Lasers Deactivated"}</p>
            <button data-testid="laserButton" onClick={this.handleClick}>Activate Lasers</button>
        </div>
      );
    }
}

export default ActivateLasers;
