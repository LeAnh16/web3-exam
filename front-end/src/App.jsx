import React from 'react';
import './App.css';
import { Container } from 'reactstrap'
import Products from './components/Products';
import Nav from './components/NavigationBar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import NotFound from './components/NotFound';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Products} />

            {/* I re-used the form component for editing and adding products */}
            <Route path="/add" component={ProductForm} />
            <Route path="/edit" component={ProductForm} />

            {/* 404 page if you try to access an unknown page */}
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;