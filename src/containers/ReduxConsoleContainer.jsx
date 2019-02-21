import React, { Component } from 'react'
import ReduxConsole from '../components/ReduxConsole';

class ReduxConsoleContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            messageLog: [],
          }
    }
  render() {
    return (
      <div>
        <ReduxConsole messageLog={this.state.messageLog}/>
      </div>
    )
  }
}
export default ReduxConsoleContainer;