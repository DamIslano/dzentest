import { createStore } from 'vuex'
import products from './products'
import orders from './orders'

export default createStore({
  modules: {
    products,
    orders,
  },
})
