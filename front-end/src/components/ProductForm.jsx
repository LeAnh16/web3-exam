import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProduct } from '../redux/actions';
import { updateProduct } from '../redux/actions'
import Octicon, { Checklist } from '@primer/octicons-react'
import { FormGroup, Form, FormFeedback, Label, Input, Button, Row, Col } from 'reactstrap';

let categories = ["Select one",
  "Action",
  "Sci-fi",
  "MOBA",
  "RPG",
  "Shooter",
  "Sports",
  "Platformer",
  "Puzzle",
  "Adventure"
]

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = props.product

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      title: this.state.title,
      body: this.state.body,
      category: this.state.category,
      releaseDate: this.state.releaseDate,
      developer: this.state.developer,
      quantity: this.state.quantity,
      img: this.state.img
    };

    if (this.props.editing && typeof this.props.product.id !== "undefined") {
      // Need id to perform an update
      product.id = this.props.product.id
      this.props.updateProduct(product);
      alert('Product has been updated')

    } else {
      this.props.createProduct(product);
      alert('A new product has been created')

    }
  }

  categoryToOption(category) {
    return (<option key={category} name={category} value={category}>{category}</ option>)
  }

  render() {
    return (<>
      <h1 style={{ textAlign: "center", paddingBottom:20 }}>{this.props.editing ? `Editing ${this.state.title}` : "Add Product"}</h1>

      <Form onSubmit={this.onSubmit}>

        <FormGroup>
          <Label for="title">Title:</Label>
          <Input type="text" name="title" id="title" placeholder="Game title" onChange={this.onChange} value={this.state.title} />
        </FormGroup>

        <FormGroup>
          <Label for="developer">Developer:</Label>
          <Input type="text"
            name="developer"
            id="developer"
            placeholder="Developer"
            onChange={this.onChange}
            value={this.state.developer} />
        </FormGroup>

        <Row>

          <Col sm={8}>
            <FormGroup>
              <Label for="releaseDate">Release Date:</Label>
              <Input type="date"
                name="releaseDate"
                id="releaseDate"
                placeholder="Release date"
                onChange={this.onChange}
                value={this.state.releaseDate} />
            </FormGroup>
          </Col>

          <Col sm={4}>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input invalid={this.state.quantity < 0}
                type="number"
                name="quantity"
                id="quantity"
                onChange={this.onChange}
                value={this.state.quantity} />
              <FormFeedback invalid="true">Quantity has to be a positive number.</FormFeedback>
            </FormGroup>
          </Col>

        </Row>

        <FormGroup>
              <Label for="img">Image URL:</Label>
              <Input type="text"
                name="img"
                id="img"
                placeholder="Place image URL here"
                onChange={this.onChange}
                value={this.state.img} />
            </FormGroup>
      <FormGroup>
        <Label for="category">Category: </Label>
        <Input type="select" name="category" id="category" defaultValue={categories.first} value={this.state.category} onChange={this.onChange}>
          {categories.map(this.categoryToOption)}
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="body">Description: </Label>
        <Input type="textarea" name="body" id="body" onChange={this.onChange} value={this.state.body} />
      </FormGroup>

      <Button color="success" type="submit">
        <Octicon verticalAlign='middle' size='medium'><Checklist /></Octicon>
      </Button>
    </Form>
    </>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  // I set the props here so that we can use a product from the state, in case we navigate to this
  // component with an id set in the Link state
  //
  // This is so that we can pre-populate the component with data before editing.

  // Could not find an alternate way to do this, so...
  if (typeof ownProps.location !== "undefined") {
    if (typeof ownProps.location.state !== "undefined") {
      if (typeof ownProps.location.state.id !== "undefined") {
        // I Would have done it with optional chaining if it was enabled in create-react-app..
        // ownProps.location?.state?.id instead

        return {
          ...ownProps,
          product: state.products.find(product => product.id === ownProps.location.state.id),
          editing: true
        }
      }
    }
  }

  return {
    ...ownProps,
    product: {
      title: '',
      body: '',
      category: '',
      releaseDate: '',
      developer: '',
      img:'',
      quantity: 0
    },
    editing: false
  }
}

export default connect(mapStateToProps, { createProduct, updateProduct })(ProductForm);