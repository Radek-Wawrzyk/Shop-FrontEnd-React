//libraries
import React, { Component } from 'react';
//containers
import Aux from '../Aux/Aux';
//components
import Home from '../../components/Home/Home'


class Layout extends Component {
    render () {
        return (
            <Aux>
              {/* <Header /> Trzeba wstawić */}
              {/* <Navigation />  -> Bedzie w headerze*/}
              <Home />  {/*Tutaj będzie zawartość strony*/}
              {/* <Footer> Trzeba wstawić */}
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
