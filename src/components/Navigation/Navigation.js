//libraries
import React from 'react';
//styles
import classes from './Navigation.scss';
//components
import NavItem from './NavItem/NavItem';
import Logo from '../../components/Logo/Logo';

const navigation = () => (
  <nav className={classes.Navigation}>
    <Logo />
    <ul className={classes.NavigationMenu}>
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
