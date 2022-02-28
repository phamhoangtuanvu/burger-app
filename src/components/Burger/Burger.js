import React from "react"
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(type => {
            return [...Array(props.ingredients[type])]
                .map((_, index) => {
                    return <BurgerIngredient key={type+index} type={type} />
                })
        })
        .reduce((arr, cur) => {
            return arr.concat(cur)
        }, [])
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Plz adding some ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger