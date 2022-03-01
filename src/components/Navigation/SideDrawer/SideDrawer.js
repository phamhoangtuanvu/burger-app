import React from "react"
import classes from "./SideDrawer.module.css"

import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import Backdrop from "../../UI/Backdrop/Backdrop"

function SideDrawer(props) {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.display) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <React.Fragment>
            {props.display && <Backdrop click={props.closeSideDrawer} />}
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%' />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer