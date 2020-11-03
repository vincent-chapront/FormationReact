import React, { Component, Fragment } from 'react';
import Membre from './Membre';
import Button from './Button';

class MembreAction extends Component{



    render() {
        const {membre, handlerAge, handlerName}=this.props
        return (
            <Fragment >
              <Membre name={membre.name} age={membre.age}/>
              <Button vieillir={()=>handlerAge(membre,-1)} text="-1"/>
              <Button vieillir={()=>handlerAge(membre,+1)} text="+1"/>
            </Fragment>
        )
    }
}

export default MembreAction