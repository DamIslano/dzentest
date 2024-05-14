import productsList from '../api/products/product.json'

export default {
  state() {
    return {
      products: productsList.products,
      type: '',
      specification: '',
    }
  },
  getters: {
    allProducts: state => {
      return state.products.filter(item => {
        return (!state.type || item.status === state.type) && (!state.specification || item.product_condition === state.specification);
      });
    }
  },
  mutations: {
    setProductType(state, newType) {
      state.type = newType
    },
    setProductSpecification(state, newSpecification) {
      state.specification = newSpecification
    },
  },
}