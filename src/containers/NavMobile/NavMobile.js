//libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';

//components
import NavBtn from '../../components/Navigation/NavBtn/NavBtn';
import NavItem from '../../components/Navigation/NavItem/NavItem'
import Logo from '../../components/Logo/Logo';

//containers
import Signing from '../../containers/Auth/Signing/Signing';

// classes
import classes from './NavMobile.scss'

//actions
import * as actions from '../../store/actions/auth';


class NavMobile extends Component {

  render(){
    let showMenu = classes.Hide;
    this.props.hide ? showMenu = classes.Hide : showMenu = classes.Show

    return (
      <nav className={classes.NavMobile}>
      <Logo />
      <NavBtn active={this.props.active} clicked={this.props.toggleMobile}/>
           <div className={classes.MobileMenu + ' ' + showMenu}>
             <ul className={classes.MobileMenuList}>
               <NavItem
                 link="/"
                 clicked={this.props.toggleMobile}
                 exact>
                   <span className="fa fa-home" aria-hidden="true"></span>
                   <p>Strona główna</p>
               </NavItem>
               <NavItem
                 link="/oferta"
                 clicked={this.props.toggleMobile}
                 exact>
                   <span className="fa fa-users" aria-hidden="true"></span>
                   <p>Produkty</p>
               </NavItem>
               <NavItem
                 link="/about"
                 clicked={this.props.toggleMobile}
                 exact>
                   <span className="fa fa-shopping-bag" aria-hidden="true"></span>
                   <p>o nas</p>
               </NavItem>
               <NavItem
                 link="/contact"
                 clicked={this.props.toggleMobile}
                 exact>
                   <span className="fa fa-phone" aria-hidden="true"></span>
                   <p>Kontakt</p>
               </NavItem>
             </ul>
             <div className={classes.MobileMenuUserPanel}>
                <Signing />
             </div>
           </div>
    </nav>
    )
  }
}

// redux
const mapStateToProps = (state, props) => {
  return {
    active: state.auth.active,
    hide: state.auth.hide,
  }
}

const mapDispatchToProps = dispatch => {
  return {
		toggleMobile: () => dispatch(actions.toggleMobile()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMobile);
