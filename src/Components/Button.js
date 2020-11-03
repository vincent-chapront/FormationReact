import { Fragment } from "react"

const Button=({vieillir, text, className})=>
    (
        <Fragment>
            <button className={"btn "+className+" my-2"} onClick={vieillir}>{text}</button>
        </Fragment>
    )

export default Button