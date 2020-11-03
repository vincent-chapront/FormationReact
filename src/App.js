import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBis from './Components/AppBis';
import MembreAction from './Components/MembreAction';
import { Fragment } from 'react';

import famille from './ressource/data.json'
const model={"incr":1}
class App extends Component{

  state={famille,model}

  HandleMembreIncrementAge=(membre,increment) =>{
    membre.age+=increment
    this.setState(membre)
  }

  HandleChangeName=(membre, newName)=>{
    membre.name=newName
    this.setState(membre)
  }

  HandleChangeIncrementer=(model, val)=>{
    model.incr=val
    this.setState(model)
  }

  componentDidMount(){
    const ls=JSON.parse(localStorage.getItem('state'))
    if(ls!=null && ls!=undefined)
    {
      this.setState({famille:ls.famille,model:ls.model})
    }
  }

  componentDidUpdate(){
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  render() {
    const {famille,model }=this.state
    const familleValues=Object.values(famille)
    const familleMembres=
      familleValues.map((membre,index) =>
      (
        <MembreAction
          key={index}
          membre={membre}
          handlerAge={this.HandleMembreIncrementAge}
          handlerName={this.HandleChangeName}
          incr={model.incr}
        />
      )
    )

    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <AppBis />
            <input type="number" value={model.incr} onChange={event=>this.HandleChangeIncrementer(model,event.target.value)}></input>
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
