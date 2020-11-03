import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBis from './Components/AppBis';
import Membre from './Components/Membre';
import Button from './Components/Button';
import { Fragment } from 'react';

import famille from './ressource/data.json'

class App extends Component{

  state={famille}

  HandleMembreIncrementAge=(membre,increment) =>{
    membre.age+=increment
    this.setState(membre)
  }

  render() {
    const {famille }=this.state
    const familleValues=Object.values(famille)
    const familleMembres=
    familleValues.map((membre,index) =>
        (
          <Fragment key={index} >
            <Membre name={membre.name} age={membre.age}/>
            <Button vieillir={()=>this.HandleMembreIncrementAge(membre,-1)} text="-1"/>
            <Button vieillir={()=>this.HandleMembreIncrementAge(membre,+1)} text="+1"/>
          </Fragment>
        )
      )
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <AppBis />
            {familleMembres}
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
