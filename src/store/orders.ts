import ordersList from '../api/orders/order.json'

export default {
	state() {
    return {
      orders: ordersList.orders
    }
  },
  getters: {
    allOrders: state => state.orders,
  },
}