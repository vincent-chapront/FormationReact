import React, { Component, Fragment } from 'react';
import Membre from './Membre';
import Button from './Button';

class MembreAction extends Component{


    render() {
        const {membre, handlerAge, handlerName,incr}=this.props
        return (
            <Fragment >
              <Membre name={membre.name} age={membre.age}/>
              <input type="text" onChange={event=>handlerName(membre,event.target.value)} value={membre.name}></input>
              <p>              
              <Button className="btn-danger" vieillir={()=>handlerAge(membre,-incr)} text={"-"+incr}/>
              <Button className="btn-success" vieillir={()=>handlerAge(membre,+incr)} text={"+"+incr}/>
              </p>
            </Fragment>
        )
    }
}

export default MembreAction