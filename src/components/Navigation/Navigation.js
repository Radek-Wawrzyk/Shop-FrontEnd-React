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
        link={`${process.env.PUBLIC_URL}/`}
        exact
        active={classes.Active}>
        Strona główna
      </NavItem>
      <NavItem
        link={`${process.env.PUBLIC_URL}/products`}
        active={classes.Active}>
        Oferta
      </NavItem>
      <NavItem
        link={`${process.env.PUBLIC_URL}/about`} 
        active={classes.Active}>
        O nas
      </NavItem>
      <NavItem
        link={`${process.env.PUBLIC_URL}/kontakt`}
        active={classes.Active}>
       Kontakt
      </NavItem>
    </ul>
  </nav>
)

export default navigation;
