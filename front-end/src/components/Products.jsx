import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import Product from './Product';

function Products(props) {
    useEffect(() => {
      props.fetchProducts()
    }, [])

    const postProducts = props.products.map(product => (
      <Product product={product} key={product.id}/>
    ));
    return (
      <div>
        <h1>Products</h1>
        {postProducts}
      </div>
    );
  }

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, { fetchProducts })(Products);