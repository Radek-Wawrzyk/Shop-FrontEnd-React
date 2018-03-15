//libraries
import React, {Component} from 'react';

import NavBtn from './NavBtn/NavBtn';
import Logo from '../../components/Logo/Logo';

import classes from './NavMobile.scss'
    let komp = null

class NavMobile extends Component {

state = {
  active: null,
  hide: true
}

toggleMenu = () => {
  this.setState({
    active: !this.state.active,
    hide: !this.state.hide
  })
}

  render(){
    let showMenu = classes.Hide;
    this.state.hide ? showMenu = classes.Hide : showMenu = classes.Show

    return (
      <nav className={classes.NavMobile}>
      <Logo />
      <NavBtn active={this.state.active} clicked={this.toggleMenu}/>
           <div className={classes.MobileMenu + ' ' + showMenu}>
             <ul className={classes.MobileMenuList}>
               <li>
                 <a href="#">
                   <span className="fa fa-home" aria-hidden="true"></span>
                   <p>Strona główna</p>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <span className="fa fa-users" aria-hidden="true"></span>
                   <p>Produkty</p>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <span className="fa fa-shopping-bag" aria-hidden="true"></span>
                   <p>o nas</p>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <span className="fa fa-phone" aria-hidden="true"></span>
                   <p>Kontakt</p>
                 </a>
               </li>
             </ul>
             <div className={classes.MobileMenuUserPanel}>
               <button>Zaloguj</button>
               <button className={classes.SignUp}>Zarejestruj</button>
             </div>
           </div>
    </nav>
    )
  }
}

export default NavMobile;
