//libraries
import React, { Component } from 'react';
//containers
import Aux from '../Aux/Aux';
//components
import Home from '../../components/Home/Home'
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
    render () {
        return (
            <Aux>
              <Navigation />
              <Home />  {/*Tutaj będzie zawartość strony*/}
            </Aux>
        )
    }
}

export default Layout;

// prawdopodobony wygląd struktury

  // <Header>
  //   <Logo></Logo>
  //   <Auth> Tu będzie rejestracja lub logowanie oraz wylogowanie</Auth>
  //   <Navigation> Tu będą linki</Navigation>
  // </Header>
  // <Content>
  //   Tu będą się zmieniać strony
  // </Content>
  // <Footer>Tu będzie stopka</Footer>
