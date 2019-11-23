import React from 'react';
import './App.css';
import { Container } from 'reactstrap'
import Products from './components/Products';
import Nav from './components/NavigationBar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import Edit from './components/Edit'
import NotFound from './components/NotFound';


function App() {
  return (
    <Provider store={store}>
      <Nav/>
      <Container>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Products } />
              <Route path="/ProductForm" component={ ProductForm } />
              <Route path="/edit" component={ Edit } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;