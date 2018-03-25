//libraries
import React, {Component} from 'react';
//styles
import classes from './Header.scss';
//containers
import Auxa from '../../hoc/Auxa/Auxa';
import UserPanel from '../UserPanel/UserPanel';
import NavMobile from '../NavMobile/NavMobile';
//components
import Navigation from '../../components/Navigation/Navigation';


class Header extends Component {

  render () {
    return (
      <Auxa >
        <header className={classes.Header}>
          <UserPanel />
          <Navigation />
          <NavMobile />
        </header>
      </Auxa>
    )
  }
}

export default Header;
