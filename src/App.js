import logo from './logo.svg';
import './App.css';
import AppBis from './Components/AppBis';
import Membre from './Components/Membre';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <AppBis />
          <Membre name="FOO" age="18" present="true"/>
          <Membre name="BAR" age="43"/>
          <Membre name="BAZ" age="60"/>
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
            Learn React
          </a>
        </header>
      </div>
      <AppBis />
    </Fragment>
  );
}

export default App;
