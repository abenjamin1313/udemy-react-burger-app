import React from 'react'
import Button from '../../UI/Button/Button';
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
            <p>A delicious burger with the folowing ingredients:</p>
            <ul className={classes.List}>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to CHeckout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </>
    );
};
