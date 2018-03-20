//libraries
import React, {Component} from 'react';
//styles
import classes from './Header.scss';
//containers
import Auxa from '../../hoc/Auxa/Auxa';
import UserPanel from '../UserPanel/UserPanel';
//components
import Navigation from '../../components/Navigation/Navigation';
import NavMobile from '../../components/NavMobile/NavMobile';


class Header extends Component {

  render () {
    return (
      <Auxa >
        <div className={classes.Header}>
          <UserPanel />
          <Navigation />
          <NavMobile />
        </div>
      </Auxa>
    )
  }
}

export default Header;
