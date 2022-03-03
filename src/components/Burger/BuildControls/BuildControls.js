import React from "react"
import BuildControl from "./BuildControl/BuildControl"
import classes from './BuildControls.module.css'

function BuildControls(props) {

    const ingredients = Object.keys(props.ingredients)

    return (
        <div className={classes.BuildControls}>
            <p className={classes.CurrentPrice}>Current Price: {props.price} $</p>
            {ingredients.map((ingredient, index) => {
                return <BuildControl
                    key={ingredient}
                    label={ingredient}
                    addIngredient={props.addIngredient}
                    removeIngredient={props.removeIngredient}
                    outOfIngredientFlag={props.ingredients[ingredient] === 0}
                />
            })}

            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchaseModal}
            >
                ORDER NOW
            </button>
        </div>
    )
}

export default BuildControls