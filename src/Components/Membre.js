import React, { Component, Fragment } from 'react';

class Membre extends Component{

    render() {
        const {age,name, present:presentAlias, children}=this.props
        return (
            <div>
                <h1>Salut {name}, {age}, {presentAlias}</h1>
                {children?<p>{children}</p>:<Fragment/>}
            </div>
        )
    }
}

export default Membre