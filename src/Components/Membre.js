import React, { Component } from 'react';

class Membre extends Component{
    // Declaring variable
    //name = "Vincent";

    render() {
        const name=this.props.name
        return (
            <div>
                <h1>Salut {name}</h1>
            </div>
        )
    }
}

export default Membre