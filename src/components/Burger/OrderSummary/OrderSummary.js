import React from 'react'
import classes from './OrderSummary.module.scss';

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>)
        });
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger witht he folowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to CHeckout?</p>
        </>
    );
};
