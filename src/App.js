//libraries
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

//containers
import Auxa from './hoc/Auxa/Auxa';
import Layout from './hoc/Layout/Layout';

//components
import Home from './containers/Home/Home'
import Products from './containers/Products/Products'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'


class App extends Component {


  render() {
    return (
      <Auxa>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/oferta" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/kontakt" component={Contact} />
          </Switch>
        </Layout>
      </Auxa>
    );
  }
}

export default App;
