import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReduxConsoleContainer from './containers/ReduxConsoleContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React
          </a>
        </header> */}
        <main>

        </main>
        <footer>
          <ReduxConsoleContainer />
        </footer>
      </div>
    );
  }
}

export default App;
