import React from "react"
import classes from "./Logo.module.css"
import burgerLogo from "../../assets/images/burger-logo.png"

function Logo(props) {
    return <div
        className={classes.Logo}
        // onClick={props.click}
        style={{ height: props.height }}
    >
        <img src={burgerLogo} />
    </div>
}

export default Logo