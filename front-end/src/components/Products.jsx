import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import Product from './Product';
import { Row, Col, Container } from 'reactstrap'
import '../App.css';


function Products({ products, fetchProducts }) {
  useEffect(() => {
    // To fetch the products on component load, we can use componentWill/DidMount in a class.
    // However this is now deprecated, and we cannot use it in a functional component. 
    // Therefore, we use the useEffect hook to perform side-effects like fetching all the
    // products from the api.

    fetchProducts()
  }, [])

  const postProducts = products.map(product => (
    <Product product={product} key={product.id} />
  ));

  return (
    <Container>
      <h1 style={{ textAlign:"center", paddingBottom:20 }}>Products</h1>
      <Row>
      {postProducts}
      </Row>
    </Container>
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