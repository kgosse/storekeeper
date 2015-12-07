import alt from '../alt';
import Immutable from 'immutable';
import OrdersActions from '../actions/orders_actions';
import parseOrders from '../utils/parse_orders';

class OrdersStore {
    constructor() {
        this.orders = [];

        this.bindListeners({
            handleUpdateOrders: OrdersActions.UPDATE_ORDERS,
            handleFetchOrders: OrdersActions.FETCH_ORDERS
        });
    }

    handleUpdateOrders(orders) {
        this.orders = orders;
    }

    handleFetchOrders() {
        this.orders = [];
    }
}

export default alt.createStore(OrdersStore);
