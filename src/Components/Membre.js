import React, { Component } from 'react';

class Membre extends Component{
    // Declaring variable
    //name = "Vincent";

    render() {
        const {age,name, present:presentAlias}=this.props
        return (
            <div>
                <h1>Salut {name}, {age}, {presentAlias}</h1>
            </div>
        )
    }
}

export default Membre