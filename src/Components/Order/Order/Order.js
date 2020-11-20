import React from 'react';
import Classes from './Order.module.css';

const order = (props) => {
    const updatedIng = [];
    for (let key in props.ingredients) {
        updatedIng.push({ name: key, amount: props.ingredients[key] })
    }

    let orders = updatedIng.map(ig => {
        return <span style={{
            display: 'inline-block',
            margin: '3px 10px',
            border: ' 2px solid #ccc',
            padding: '3px',
            textTransform: 'capitalize'
        }} key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return (

        <div className={Classes.Order}>
            <div className={Classes.Ingredients}>
                <p>Ingredients: {orders} </p>
                <p>Price: <strong>Rs.{props.price}</strong></p>
            </div>
            <div className={Classes.DeleteBtn}>
                <p onClick={() => props.removeOrder(props.id)}>DELETE</p>
            </div>
        </div>

    );
}

export default order;