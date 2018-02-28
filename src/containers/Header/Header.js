//libraries
import React, {Component} from 'react';
//styles
// import classes from './Header.scss';
//containers
import Auxa from '../../hoc/Auxa/Auxa';
//components
import Logo from '../../components/Logo/Logo';

class Header extends Component {

  render () {
    return (
      <Auxa>
        <Logo />
      </Auxa>
    )
  }
}

export default Header;



// Logo po lewej
//
// Po prawej na górze lupka, Zaloguj, Zarejestruj
//
// Po zalogowaniu: po prawej lupka i Witaj "Imię"
//
// Pod spodem Navigation
