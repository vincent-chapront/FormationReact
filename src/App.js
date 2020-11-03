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
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <AppBis />
            <Membre name={famille.membre1.name} age={famille.membre1.age}  />
                <Button vieillir={()=>this.HandleMembreIncrementAge(famille.membre1,-1)} text="-1"/>
                <Button vieillir={()=>this.HandleMembreIncrementAge(famille.membre1,+1)} text="+1"/>
            <Membre name={famille.membre2.name} age={famille.membre2.age}  />
                <Button vieillir={()=>this.HandleMembreIncrementAge(famille.membre2,-2)} text="-2"/>
                <Button vieillir={()=>this.HandleMembreIncrementAge(famille.membre2,+2)} text="+2"/>
            <Membre name={famille.membre3.name} age={famille.membre3.age}  />
                <Button vieillir={()=>this.HandleMembreIncrementAge(famille.membre3,-3)} text="-3"/>
                <Button vieillir={()=>this.HandleMembreIncrementAge(famille.membre3,+3)} text="+3"/>
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
