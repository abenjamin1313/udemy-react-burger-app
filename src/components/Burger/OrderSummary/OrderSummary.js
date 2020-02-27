import React, { Component } from 'react'
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.scss';

class OrderSummary extends Component {
        componentDidUpdate() {
            console.log('[OrderSummary] WillUpdate');
        }

        render() {
            const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                        </li>)
        });
        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the folowing ingredients:</p>
                <ul className={classes.List}>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to CHeckout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </>
        )
    }
}

export default OrderSummary;
