import logo from './logo.svg';
import './App.css';
import AppBis from './Components/membre';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <AppBis />
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
