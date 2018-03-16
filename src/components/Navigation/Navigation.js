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
      <NavItem
        link="/"
        exact
        active={classes.Active}>
        Strona główna
      </NavItem>
      <NavItem
        link="/oferta"
        active={classes.Active}>
        Oferta
      </NavItem>
      <NavItem
        link="/about"
        active={classes.Active}>
        O nas
      </NavItem>
      <NavItem
        link="/contact"
        active={classes.Active}>
       Kontakt
      </NavItem>
    </ul>
  </nav>
)

export default navigation;
