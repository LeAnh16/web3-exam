import { FETCH_PRODUCTS, PRODUCT_CREATED, PRODUCT_DELETED, PRODUCT_UPDATED } from './types'
import Axios from 'axios';

export const fetchProducts = () => (dispatch) => {
  Axios.get('https://localhost:5001/Games')
    .then(res => res.data)
    .then(products => dispatch({ type: FETCH_PRODUCTS, payload: products }))
}

export const createProduct = productData => dispatch => {
  Axios.post("https://localhost:5001/Games", JSON.stringify(productData), {
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (res.status == 201) {
        dispatch({ type: PRODUCT_CREATED, payload: res.data })
      }
    })
};

export const updateProduct = productData => dispatch => {
  Axios.put(`https://localhost:5001/Games/${productData.id}`, JSON.stringify(productData),{
    headers: {
      'content-type' : 'application/json'
    }
  }).then(res => {
    if (res.status == 200){
      dispatch({type: PRODUCT_UPDATED, payload: res.data})
    }
  })
}

export const deleteProduct = id => dispatch => {
  Axios.delete(`https://localhost:5001/Games/${id}`)
    .then(res => {
      if (res.status == 200) {
        dispatch({ type: PRODUCT_DELETED, payload: id })
      }
    })
}