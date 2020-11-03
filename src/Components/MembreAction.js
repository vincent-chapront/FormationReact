import React, { Component, Fragment } from 'react';
import Membre from './Membre';
import Button from './Button';

class MembreAction extends Component{

    render() {
        const {membre, handler}=this.props
        return (
            <Fragment >
              <Membre name={membre.name} age={membre.age}/>
              <Button vieillir={()=>handler(membre,-1)} text="-1"/>
              <Button vieillir={()=>handler(membre,+1)} text="+1"/>
            </Fragment>
        )
    }
}

export default MembreAction