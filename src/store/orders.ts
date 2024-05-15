import ordersList from '../api/orders/order.json'
import type { Order, OrderState } from '../interfaces/orders'

export default {
	state(): OrderState {
    return {
      orders: ordersList.orders as Order[]
    }
  },
  getters: {
    allOrders: (state: OrderState) => state.orders,
  },
}