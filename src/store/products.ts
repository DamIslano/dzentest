import productsList from '../api/products/product.json'
import type { Product, ProductState } from '../interfaces/products'

export default {
  state(): ProductState {
    return {
      products: productsList.products as Product[],
      type: '',
      specification: '',
    }
  },
  getters: {
    allProducts: (state: ProductState) => {
      return state.products.filter(item => {
        return (!state.type || item.status === state.type) && (!state.specification || item.product_condition === state.specification)
      })
    },
  },
  mutations: {
    setProductType(state: ProductState, newType: string) {
      state.type = newType
    },
    setProductSpecification(state: ProductState, newSpecification: string) {
      state.specification = newSpecification
    },
  },
}
