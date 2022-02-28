import React from "react"
// import classes from "./OrderSummary.module.css"
import Button from "../../UI/Button/Button"

function OrderSummary(props) {
    const ingredientSumary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>{key}: {props.ingredients[key]}</li>
        })

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicios burger</p>
            <ul>
                {ingredientSumary}
            </ul>
            <p>Total Price: {props.price}</p>

            <p>Check out?</p>

            <Button
                btnType="Danger"
                click={props.purchaseCancel}
            >Cancel
            </Button>

            <Button
                btnType="Success"
                click={props.purchaseContinue}
            >Continue
            </Button>
        </React.Fragment>
    )
}

export default OrderSummary