import React, { Component, Fragment } from 'react';

class Formulaire extends Component{
    state={name:"Zacary",age:17}
    changeName=event=>{
        const state=this.state
        state.name=event.target.value
        this.setState(state)
    }
    changeAge=event=>{
        const state=this.state
        state.age=event.target.value
        this.setState(state)
    }

    render() {
        const {handleSubmit}=this.props
        return (
            <Fragment >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" placeholder="Nom" value={this.state.name}
                                onChange={this.changeName}
                            ></input>
                        </div>
                        <div className="col-sm-3">
                            <input type="number" min="0" placeholder="Age"value={this.state.age}
                                onChange={this.changeAge}></input>
                        </div>
                        <div className="col-sm-3">
                            <button onClick={()=>handleSubmit(this.state.name, this.state.age)}>Save</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Formulaire