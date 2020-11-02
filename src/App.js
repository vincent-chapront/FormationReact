import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBis from './Components/AppBis';
import Membre from './Components/Membre';
import { Fragment } from 'react';

import famille from './ressource/data.json'

console.log({"fichierFamille BEFORE class " : famille}) // OK
class App extends Component{
  state={famille}
  render() {
    const {famille }=this.state
    console.log({"state IN render " : this.state}) // OK
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <AppBis />
            <Membre name={famille.membre1.name} age={famille.membre1.age}  />
            <Membre name={famille.membre2.name} age={famille.membre2.age}  />
            <Membre name={famille.membre3.name} age={famille.membre3.age}  />
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
}

export default App;
