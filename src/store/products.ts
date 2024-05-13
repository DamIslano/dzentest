import productsList from '../api/products/product.json'

export default {
  state() {
    return {
      products: productsList.products,
      type: 'Available',
      specification: 'Used',
    }
  },
  getters: {
    allProducts: state => {
      console.log(state.products);
      return state.products
      
      // state.products.sort((a, b) => {
      //   // console.log(111, state.type.indexOf(a.status) - state.type.indexOf(b.status));
      //   return state[property].indexOf(b.status) - state[property].indexOf(a.status)
      // }) 
    } 
  },
  mutations: {
    setProductType(state, newType) {
      state.type = newType
    }
  },
}