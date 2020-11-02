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

  HandleMembreIncrement=(m) =>{
    m.age++
    this.setState(m)
  }

  HandleMembreDecrement=(m) =>{
    m.age--
    this.setState(m)
  }

  render() {
    const {famille }=this.state
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <AppBis />
            <Membre name={famille.membre1.name} age={famille.membre1.age}  />
                <Button 
                  jeunir={()=>this.HandleMembreDecrement(famille.membre1)}
                  vieillir={()=>this.HandleMembreIncrement(famille.membre1)}
                />
            <Membre name={famille.membre2.name} age={famille.membre2.age}  />
                <Button 
                  jeunir={()=>this.HandleMembreDecrement(famille.membre2)}
                  vieillir={()=>this.HandleMembreIncrement(famille.membre2)}
                />
            <Membre name={famille.membre3.name} age={famille.membre3.age}  />
                <Button 
                  jeunir={()=>this.HandleMembreDecrement(famille.membre3)}
                  vieillir={()=>this.HandleMembreIncrement(famille.membre3)}
                />
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
