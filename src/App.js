import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBis from './Components/AppBis';
import Formulaire from './Components/Formulaire';
import MembreAction from './Components/MembreAction';
import { Fragment } from 'react';

import famille from './ressource/data.json'
const model={"incr":1, "show":false}
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

  HandleDisplayText=()=>{
    const model = this.state.model
    model.show=!model.show
    this.setState(model)
  }

  HandleSubmitMembre=(name, age)=>{    
    const famille = this.state.famille
    const newMembre={"name":name, "age":age}
    famille.push(newMembre)
    this.setState(famille)
  }

  componentDidMount(){
    const ls=JSON.parse(localStorage.getItem('state'))
    if(ls!==null && ls!==undefined)
    {
      this.setState(ls)
    }
  }

  componentDidUpdate(){
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  render() {
    const {famille,model }=this.state
    const familleMembres=
      famille.map((membre,index) =>
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

    const familleDisplay= 
        model.show
        ? <Fragment>
            <input type="number" value={model.incr} onChange={event=>this.HandleChangeIncrementer(model,event.target.value)}></input>
            {familleMembres}
          </Fragment>
        : <Fragment/>

    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <AppBis />

            <Formulaire handleSubmit={this.HandleSubmitMembre}/>

            <button onClick={this.HandleDisplayText}>{model.show?"MASQUER":"AFFICHER"}</button>
                        
            {familleDisplay}

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
      </Fragment>
    );
  }
}

export default App;
