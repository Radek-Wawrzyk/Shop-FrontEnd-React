//libraries
import React, { Component } from 'react';
//containers
import Auxa from '../Auxa/Auxa';
import Header from '../../containers/Header/Header';

import './Layout.css';


class Layout extends Component {
    render () {
        return (
            <Auxa>
              <Header />
              <main>
                  {this.props.children}
              </main>
            </Auxa>
        )
    }
}

export default Layout;
