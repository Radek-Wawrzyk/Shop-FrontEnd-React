//libraries
import React from 'react';
//styles
import classes from './Navigation.scss';
//components
import NavItem from './NavItem/NavItem';

const navigation = () => (
  <nav className={classes.Navigation}>
    <ul>
        <NavItem>
          Home
        </NavItem>
    </ul>
  </nav>
)

export default navigation;
