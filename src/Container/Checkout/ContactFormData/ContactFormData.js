import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';
import classes from './ContactFormData.module.css';

class contactFormData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email ID'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }]
                },
                value: 'fastest'
            }
        },
        loading: false,
        error: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        
        let order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price
        }

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false })
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }

    inputChangedHandler = (e, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        let updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = e.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updatedOrderForm })
    }

    render() {
        let formElementarray = [];
        for (let key in this.state.orderForm) {
            formElementarray.push({
                id: key,
                config: this.state.orderForm[key]

            })
        }
        console.log(formElementarray);
        let formData = (
            <form onSubmit={this.orderHandler}>
                {formElementarray.map(formElement => {
                    return <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(e) => this.inputChangedHandler(e, formElement.id)} />
                })}
                <Button btnType="Success">ORDER</Button>
            </form>
        )

        if (this.state.loading) {
            formData = <Spinner />
        }

        if (this.state.error) {
            formData = <p style={{ textAlign: 'center' }}>Failed to fetch details</p>
        }
        return (
            <div className={classes.ContactData}>
                <h3>Enter your Details</h3>
                {formData}
            </div>
        );
    }
}

export default contactFormData;