//libraries
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

//hoc
import Auxa from './hoc/Auxa/Auxa';
import Layout from './hoc/Layout/Layout';

//containers
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import CartList from './containers/CartList/CartList'

//components
import ProductList from './components/Product/ProductList/ProductList';
import FullProduct from './components/Product/FullProduct';


class App extends Component {

  render() {
    return (
      <Auxa>
        <Layout>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/products/:id`}  component={FullProduct} />
            <Route path={`${process.env.PUBLIC_URL}/products`}  component={ProductList} />
            <Route path={`${process.env.PUBLIC_URL}/cart`}  component={CartList} />
            <Route path={`${process.env.PUBLIC_URL}/about`}  component={About} />
            <Route path={`${process.env.PUBLIC_URL}/kontakt`}  component={Contact} />
          </Switch>
        </Layout>
      </Auxa>
    );
  }
}

export default App;
