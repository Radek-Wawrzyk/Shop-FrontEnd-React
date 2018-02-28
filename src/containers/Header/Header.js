//libraries
import React, {Component} from 'react';
//styles
import classes from './Header.scss';
//containers
import Auxa from '../../hoc/Auxa/Auxa';
import Auth from '../Auth/Auth';
//components
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';

class Header extends Component {

  render () {
    return (
      <Auxa>
        <Logo />
        <Auth />
        <Navigation />
      </Auxa>
    )
  }
}

export default Header;
