import React from "react"
import classes from './BuildControl.module.css'

function BuildControl(props) {

    return (
        <div className={classes.BuildControl}>
            <div>{props.label}</div>
            <button 
                disabled = {props.outOfIngredientFlag} 
                onClick={() => props.removeIngredient(props.label)}
            >Less</button>
            <button onClick={() => props.addIngredient(props.label)}>More</button>
        </div>
    )
}

export default BuildControl