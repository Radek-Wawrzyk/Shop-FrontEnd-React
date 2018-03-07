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
        Strona główna
      </NavItem>
      <NavItem>
        Oferta
      </NavItem>
      <NavItem>
        O nas
      </NavItem>
      <NavItem>
        Kontakt
      </NavItem>
    </ul>
  </nav>
)

export default navigation;
