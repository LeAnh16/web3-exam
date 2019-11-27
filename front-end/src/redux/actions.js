import Axios from 'axios';
import { FETCH_PRODUCTS, PRODUCT_CREATED, PRODUCT_DELETED, PRODUCT_UPDATED, FETCH_PRODUCT } from './types'

const HTTPStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
}

// Here I use thunked actions, meaning they can be dispatched asynchronously after
// for example an async call to back-end is finished.

export const fetchProducts = () => dispatch => {
  Axios.get('https://localhost:5001/games')
    .then(res => dispatch({ type: FETCH_PRODUCTS, payload: res.data }))
}

export const fetchProduct = id => dispatch => {
  Axios.get(`https://localhost:5001/game/${id}`)
    .then(res => dispatch({ type: FETCH_PRODUCT, payload: res.data }))
}

export const createProduct = productData => dispatch => {
  Axios.post('https://localhost:5001/game', JSON.stringify(productData), {
    headers: { 'content-type': 'application/json' }
  }).then(res => {
    switch (res.status) {
      case HTTPStatus.CREATED:
        // Success - the item was created
        dispatch({ type: PRODUCT_CREATED, payload: res.data })

      // Can implement error handling on server / client errors etc. If I had time here.
    }
  })
};

export const updateProduct = productData => dispatch => {
  Axios.put(`https://localhost:5001/game/${productData.id}`, JSON.stringify(productData), {
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => {
    switch (res.status) {
      case HTTPStatus.NO_CONTENT:
        // Success - the item was updated
        dispatch({ type: PRODUCT_UPDATED, payload: productData })
    }
  })
}

export const deleteProduct = id => dispatch => {
  Axios.delete(`https://localhost:5001/game/${id}`)
    .then(res => {
      switch (res.status) {
        case HTTPStatus.NO_CONTENT:
          // Success - the item was deleted
          dispatch({ type: PRODUCT_DELETED, payload: id })
      }
    })
}