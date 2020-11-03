import React, { Component, Fragment } from 'react';

class Formulaire extends Component{
    state={name:"Zacary",age:17}
    change=event=>{
        const { name , value }= event.target
        this.setState({ [name]:value})
    }

    submit=event=>{
        event.preventDefault()
        this.props.handleSubmit(this.state.name, this.state.age)
    }

    render() {
        return (
            <Fragment >
                <form onSubmit={this.submit}>
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
                            <button type="submit">Save</button>
                        </div>
                    </div>
                </div>
                </form>
            </Fragment>
        )
    }
}

export default Formulaire