import React, { Component } from 'react';
import './ReduxConsole.css';

class ReduxConsole extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="ReduxConsole ConsoleText">
        <h5 className="ConsoleHeader">Redux Console</h5>
        <div className="ConsoleMain">
          {this.props.messageLog.map((message,i) =>
            <p><span className="lineNo">{i+". "}&nbsp;&nbsp;</span>{message}</p>
          )}
        </div>
      </div>
    )
  }
}

export default ReduxConsole;