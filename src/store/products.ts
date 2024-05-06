import productsList from '../api/products/product.json'

export default {
  state() {
    return {
      products: productsList.products
    }
  },
  getters: {
    allProducts: state => state.products,
  },
  mutations: {
    // loadTaskList(state, payload) {
    //   state.taskList = payload
    // },
  },
  actions: {
    // async setTask({ dispatch }, obj) {
    //   try {
    //     await axios.post(`test`, {...obj})
    //     await dispatch('getTask')
    //   } catch(e) {
    //     throw new Error(e)
    //   }
    // },
  },
}