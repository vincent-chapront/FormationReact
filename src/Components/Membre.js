import React, { Component } from 'react';

class Membre extends Component{
    // Declaring variable
    name = "Vincent";
  
    render() {
        return (
            <div>
                <h1>Salut {this.name}</h1>
            </div>
        )
    }
}

export default Membre