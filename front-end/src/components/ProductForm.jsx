import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProduct } from '../redux/actions';
import { FormGroup, Form, FormFeedback, FormText, Label, Input, Button, Row, Col } from 'reactstrap';

let categories = ["Select one",
  "Action",
  "Sci-fi",
  "MOBA",
]

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      category: '',
      releaseDate: '',
      quantity: 0,
      developer: '',
    };

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
      quantity: this.state.quantity
    };

    this.props.createProduct(product);
  }

  categoryToOption(category) {
    return (<option key={category} name={category} value={category}>{category}</ option>)
  }

  render() {
    return (<>
      <h1>Add Product</h1>
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
              <FormFeedback invalid>Quantity has to be a positive number.</FormFeedback>
            </FormGroup>
          </Col>

        </Row>

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
        <Button type="submit">Submit</Button>
      </Form>
    </>
    )
  }

}

ProductForm.propTypes = {
  createProduct: PropTypes.func.isRequired
};

export default connect(null, { createProduct })(ProductForm);