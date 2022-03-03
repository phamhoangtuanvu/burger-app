import React, { useState } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

import axios from '../../axios-orders'
import Spinner from "../../components/UI/Spinner/Spinner";

function BurgerBuilder(props) {

    const INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 1,
        meat: 1,
        bacon: 0.5
    }

    const [state, setState] = useState({
        ingredients: {
            meat: 0,
            bacon: 0,
            cheese: 0,
            salad: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchaseModal: false,
        loading: false,
    });

    function addIngredientHandler(type) {
        const newIngredients = { ...state.ingredients }
        newIngredients[type] += 1

        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = state.totalPrice + priceAddition
        setState({
            ...state,
            ingredients: newIngredients,
            totalPrice: newPrice
        })
        updatePurchaseState(newIngredients)

    }

    function removeIngredientHandler(type) {
        if (state.ingredients[type] > 0) {
            const newIngredients = { ...state.ingredients }
            newIngredients[type] -= 1

            const newPrice = state.totalPrice - INGREDIENT_PRICES[type]
            setState({
                ...state,
                ingredients: newIngredients,
                totalPrice: newPrice
            })
            updatePurchaseState(newIngredients)
        }

    }

    function updatePurchaseState(newIngredients) {
        const purchasable = !Object.values(newIngredients).every(e => e === 0)
        console.log(newIngredients);
        setState(prevState => ({
            ...prevState,
            purchasable: purchasable
        }))
    }

    function updatePurchaseModalState() {
        setState({
            ...state,
            purchaseModal: !state.purchaseModal
        })
    }

    function purchaseCancelHandler() {
        updatePurchaseModalState()
    }

    function purchaseContinueHandler() {

        setState({
            ...state,
            loading: true,
        })

        const order = {
            ingredients: state.ingredients,
            price: state.totalPrice,
            customer: {
                name: 'Vu',
                address: {
                    street: 'NTT',
                    district: '7',
                },
                email: 'tuanvu.iris@gmail.com'
            },
        }

        axios.post('/orders.json', order)
            .then(response => {
                setState({
                    ...state,
                    loading: false,
                    purchaseModal: false,
                })
            })
            .catch(err => {
                setState({
                    ...state,
                    loading: false,
                    purchaseModal: false,
                })
            })
    }

    return (
        <React.Fragment>

            <Modal
                show={state.purchaseModal}
                closeModal={updatePurchaseModalState}
            >
                {state.loading ?
                    <Spinner /> :
                    <OrderSummary
                        ingredients={state.ingredients}
                        purchaseCancel={purchaseCancelHandler}
                        purchaseContinue={purchaseContinueHandler}
                        price={state.totalPrice}
                    />}
            </Modal>

            <Burger
                ingredients={state.ingredients}
            />
            <BuildControls
                ingredients={state.ingredients}
                price={state.totalPrice}
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
                purchasable={state.purchasable}
                purchaseModal={updatePurchaseModalState}

            />
        </React.Fragment>
    )
}

export default BurgerBuilder