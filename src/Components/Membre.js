import React, { Component } from 'react';

class Membre extends Component{
    // Declaring variable
    //name = "Vincent";

    render() {
        const {age,name, present:presentAlias, children}=this.props
        return (
            <div>
                <h1>Salut {name}, {age}, {presentAlias}</h1>
                <h2>{children}</h2>
            </div>
        )
    }
}

export default Membre