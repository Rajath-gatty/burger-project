import React from 'react';
import Classes from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className={Classes.CheckoutSummary}>
            <h1>Hope it tastes well!</h1>
            <div style={{ width: '100%', height: 'auto', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" Clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" Clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;