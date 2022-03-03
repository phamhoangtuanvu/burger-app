import React from "react"
import classes from "./OrderSummary.module.css"
import Button from "../../UI/Button/Button"

function OrderSummary(props) {
    const ingredientSumary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>{key[0].toUpperCase() + '' + key.slice(1)}: {props.ingredients[key]}</li>
        })

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger: </p>
            <ul>
                {ingredientSumary}
            </ul>
            <p><b>Total Price: {props.price} $</b></p>

            <Button
                btnType="Danger"
                click={props.purchaseCancel}
            >Cancel
            </Button>

            <Button
                btnType="Success"
                click={props.purchaseContinue}
            >Check out
            </Button>
        </React.Fragment>
    )
}

export default OrderSummary