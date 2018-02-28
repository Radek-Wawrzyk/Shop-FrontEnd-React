//libraries
import React, { Component } from 'react';
//containers
import Auxa from './hoc/Auxa/Auxa';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Auxa>
        <Layout>
        </Layout>
      </Auxa>
    );
  }
}

export default App;
