import React from "react"
import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <div
                onClick={props.openSideDrawer}
                className={[classes.MenuIcon, classes.MobileOnly].join(' ')}
            ><i className={"fa-solid fa-bars"}></i></div>
            <Logo height='80%' />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar