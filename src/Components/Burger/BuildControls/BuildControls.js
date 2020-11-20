import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Fries', type: 'fries' },
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <h3>Current Price :<strong> {props.price}</strong></h3>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    remove={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]
                    } />
            })}
            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}>Order Now</button>
        </div>
    );
}

export default buildControls;