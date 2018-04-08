//libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

//styles
import classes from './Header.scss';

//containers
import Auxa from '../../hoc/Auxa/Auxa';
import UserPanel from '../UserPanel/UserPanel';
import NavMobile from '../NavMobile/NavMobile';

//components
import Navigation from '../../components/Navigation/Navigation';
import SearchContainer from '../SearchContainer/SearchContainer';

//actions
import * as actions from '../../store/actions/search';

class Header extends Component {

  render () {
    return (
      <Auxa >
        <header className={classes.Header}>
          <UserPanel />
          <Navigation />
          <NavMobile />
          {this.props.searchIsOpen ? <SearchContainer show clicked={this.props.toggleSearch}/> : <SearchContainer /> }
        
        </header>
      </Auxa>
    )
  }
}

// redux
const mapStateToProps = (state, props) => {
  return {
    searchIsOpen: state.search.searchIsOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
		toggleSearch: () => dispatch(actions.toggleSearch()),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
// export default Header;
