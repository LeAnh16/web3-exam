import { FETCH_PRODUCTS, PRODUCT_CREATED, PRODUCT_UPDATED, PRODUCT_DELETED } from './types'
const initialState = {
  products: []
}

function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.payload
      }
    case PRODUCT_CREATED:
      return {
        ...state,
        products: [...state.items, action.payload]
      }
    case PRODUCT_UPDATED:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) { return action.payload }
          else { return product }
        })
      }
    case PRODUCT_DELETED:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }
    default:
      return state;
  }
}

export default products