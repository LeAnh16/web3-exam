import React from 'react'
import { Card, CardImg, CardHeader, CardBody, CardSubtitle, CardText, Button, Row, Col, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../redux/actions'
import { connect } from 'react-redux'
import Octicon, { Pencil, X } from '@primer/octicons-react'

function Product({ product, deleteProduct }) {
  return (
    
    <Col sm={12} md={4}>
      <Card style={{ margin: "2px", textAlign: "center" }}>
        <CardHeader>{product.title}</CardHeader>
        <CardImg top width="100%" src={product.img}/>
        <CardBody >
          <CardSubtitle>Category: {product.category}</CardSubtitle>
          <CardText>Release date: {product.releaseDate}</CardText>
          <CardText >Games in store: {product.quantity}</CardText>

          {/* Card action */}
          
          <row className="row-centered">
            {/* I use Octicons (open source icons from GitHub) to add some flare to the buttons. */}
            {/* Delete button */}
            <Button className="button" color="danger" onClick={() => deleteProduct(product.id)}>
              <Octicon verticalAlign='middle' size='medium'><X /></Octicon>
            </Button>

            {/* Edit button */}
            <Link to={{
              pathname: '/edit',
              state: { id: product.id }
            }}>
              <Button><Octicon verticalAlign='middle' size='medium'><Pencil /></Octicon></Button></Link>
          </row>
          <CardFooter className="CardFooter">{product.body}</CardFooter>
        </CardBody>
       
      </Card>
    </Col>
  );
};

export default connect(null, { deleteProduct })(Product);
