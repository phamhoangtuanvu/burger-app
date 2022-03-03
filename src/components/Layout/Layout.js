import React, { useState } from "react"

import classes from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

function Layout(props) {

    const [state, setstate] = useState({
        displaySideDrawer: false,
    })

    function openSideDrawerHandler() {
        setstate({
            ...state,
            displaySideDrawer: true,
        })
    }

    function closeSideDrawerHandler() {
        setstate({
            ...state,
            displaySideDrawer: false,
        })
    }


    return (
        <React.Fragment>
            <Toolbar
                openSideDrawer={openSideDrawerHandler}
            ></Toolbar>

            <SideDrawer
                display={state.displaySideDrawer}
                closeSideDrawer={closeSideDrawerHandler}
            />

            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout