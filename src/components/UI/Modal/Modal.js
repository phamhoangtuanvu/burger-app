import React from "react"
import classes from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"

function Modal(props) {
    return props.show ?
        <React.Fragment>
            <div className={classes.Modal}>
                {props.children}
            </div>
            <Backdrop click={props.closeModal} />
        </React.Fragment> :
        ''
}

export default Modal