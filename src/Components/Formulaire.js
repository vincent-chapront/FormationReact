import React, { Component, Fragment } from 'react';

class Formulaire extends Component{
    state={name:"Zacary",age:17}
    change=event=>{
        const { name , value }= event.target
        this.setState({ [name]:value})
    }
    }

    render() {
        const {handleSubmit}=this.props
        return (
            <Fragment >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" name="name" placeholder="Nom" value={this.state.name}
                                onChange={this.change}
                            ></input>
                        </div>
                        <div className="col-sm-3">
                            <input type="number" name="age" min="0" placeholder="Age"value={this.state.age}
                                onChange={this.change}
                                ></input>
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