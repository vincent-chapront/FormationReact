import React, { Component, Fragment } from 'react';
import Membre from './Membre';
import Button from './Button';

class MembreAction extends Component{


    render() {
        const {membre, handlerAge, handlerName,incr}=this.props
        return (
            <Fragment >
               <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <Membre name={membre.name} age={membre.age}/>
                        </div>
                        <div class="col-sm-3">
                            <input type="text" onChange={event=>handlerName(membre,event.target.value)} value={membre.name}></input>
                        </div>
                        <div class="col-sm-3">
                            <Button className="btn-danger" vieillir={()=>handlerAge(membre,-incr)} text={"-"+incr}/>
                            <Button className="btn-success" vieillir={()=>handlerAge(membre,+incr)} text={"+"+incr}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MembreAction