import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBis from './Components/AppBis';
import Membre from './Components/Membre';
import { Fragment } from 'react';

import famille from './ressource/data.json'

class App extends Component{

  state={famille}

  HandleMembreIncrement=(i) =>{
    const famille={...this.state.famille}
    if(i===1) famille.membre1.age++
    if(i===2) famille.membre2.age++
    if(i===3) famille.membre3.age++
    this.setState(this.state)
  }

  HandleMembreDecrement=(i) =>{
    const famille={...this.state.famille}
    if(i===1) famille.membre1.age--
    if(i===2) famille.membre2.age--
    if(i===3) famille.membre3.age--
    this.setState(this.state)
  }

  render() {
    const {famille }=this.state
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <AppBis />
            <Membre name={famille.membre1.name} age={famille.membre1.age}  />
                <button onClick={()=>this.HandleMembreDecrement(1)}>-</button>
                <button onClick={()=>this.HandleMembreIncrement(1)}>+</button>
            <Membre name={famille.membre2.name} age={famille.membre2.age}  />
                <button onClick={()=>this.HandleMembreDecrement(2)}>-</button>
                <button onClick={()=>this.HandleMembreIncrement(2)}>+</button>
            <Membre name={famille.membre3.name} age={famille.membre3.age}  />
                <button onClick={()=>this.HandleMembreDecrement(3)}>-</button>
                <button onClick={()=>this.HandleMembreIncrement(3)}>+</button>
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
