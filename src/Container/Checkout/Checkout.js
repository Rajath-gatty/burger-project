import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactFormData from '../Checkout/ContactFormData/ContactFormData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            fries: 0
        },
        totalPrice: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            //['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {

                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push(this.props.match.path + '/contact-data');
    }

    render() {
        return (
            <Aux>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactFormData ingredients={this.state.ingredients} price={this.state.totalPrice} />)} />
            </Aux>
        );
    }
}

export default Checkout;