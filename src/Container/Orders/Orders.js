import React, { Component } from 'react';
import Order from '../../Components/Order/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../Components/UI/Spinner/Spinner';


class Orders extends Component {

    state = {
        orders: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key

                    });
                }
                this.setState({ orders: fetchedOrders, loading: false })
            })
            .catch(err => {
                this.setState({ loading: false, error: true })
            })
    }


    deleteOrderHandler = (id) => {
        axios.delete(`/orders/${id}.json`)
            .then(res => window.location.reload())
    }


    render() {
        let orders = <Spinner />;
        if (!this.state.loading) {
            orders = (this.state.orders.map(res => {
                return <Order key={res.id} id={res.id} ingredients={res.ingredients} price={res.totalPrice} removeOrder={this.deleteOrderHandler} />
            }))
        }

        if (this.state.error) {
            orders = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        }

        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);