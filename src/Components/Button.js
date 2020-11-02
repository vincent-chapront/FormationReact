import { Fragment } from "react"

const Button=({jeunir, vieillir})=>
    (
        <Fragment>
            <button onClick={jeunir}>-1</button>
            <button onClick={vieillir}>+1</button>
        </Fragment>
    )

export default Button