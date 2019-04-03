import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Products from "./components/Products";
import ProductsForm from './components/ProductsForm';

import { Container, } from "semantic-ui-react";


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductsForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);


export default App;
