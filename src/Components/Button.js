import { Fragment } from "react"

const Button=({vieillir, text})=>
    (
        <Fragment>
            <button onClick={vieillir}>{text}</button>
        </Fragment>
    )

export default Button