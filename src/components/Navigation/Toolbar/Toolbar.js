import React from "react"
import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <div onClick={props.openSideDrawer}>Menu</div>
            <Logo height='80%' />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar