import React, { Component, Fragment } from 'react';
import Membre from './Membre';
import Button from './Button';

class MembreAction extends Component{



    render() {
        const {membre, handlerAge, handlerName}=this.props
        return (
            <Fragment >
              <Membre name={membre.name} age={membre.age}/>
              <input type="text" onChange={event=>handlerName(membre,event.target.value)} value={membre.name}></input>
              <Button vieillir={()=>handlerAge(membre,-1)} text="-1"/>
              <Button vieillir={()=>handlerAge(membre,+1)} text="+1"/>
            </Fragment>
        )
    }
}

export default MembreAction