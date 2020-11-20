import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li key={igKey}>
                <strong><span style={{ textTransform: "uppercase", lineHeight: "2" }}>{igKey}</span>: {props.ingredients[igKey]}</strong>
            </li>
        })

    return (
        <Aux>
            <h1>Order Summary</h1>
            <p>A delicious Burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price: &#8377; {props.price}</h3>
            <p>Continue to checkout ?</p>
            <Button btnType="Success" Clicked={props.continue} >CONTINUE</Button>
            <Button btnType="Danger" Clicked={props.cancel}>CANCEL</Button>
        </Aux>
    );
}

export default orderSummary;