import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../redux/actions'
import { connect } from 'react-redux'
import Octicon, { Pencil, X } from '@primer/octicons-react'


function Product({ product, deleteProduct }) {
  return (
    <Card >
      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Title: {product.title}</CardTitle>
        <CardSubtitle>Category: {product.category}</CardSubtitle>
        <CardText>Description: {product.body}</CardText>

        {/* Card action */}
        <Row>
          {/* Delete button */}
          <Button style={{ marginRight: 8, marginLeft: 8 }} color="danger" onClick={() => deleteProduct(product.id)}>
            <Octicon verticalAlign='middle' size='medium'><X /></Octicon>
          </Button>

          {/* Edit button */}
          <Link to={{
            pathname:'/edit',
            state: {
              product: product
            }}}>
          <Button><Octicon verticalAlign='middle' size='medium'><Pencil /></Octicon></Button>
          </Link>
        </Row>

      </CardBody>
    </Card>
  );
};

export default connect(null, { deleteProduct })(Product);
