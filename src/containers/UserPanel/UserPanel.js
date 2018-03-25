//libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';

//components
import Logout from '../../components/Auth/Logout/Logout';
import Search from '../../components/Search/Search';

//containers
import Signing from '../Auth/Signing/Signing';
import Auxa from '../../hoc/Auxa/Auxa';

//classes
import classes from './UserPanel.scss';

//actions
import * as actions from '../../store/actions/auth';

class Auth extends Component {

componentDidMount() {
  this.props.checkAuth()
}

  render () {
    return (
      <Auxa>
        <div className={classes.UserPanel}>
          <Search />
          <div>
            {this.props.isSignin ? <Logout clicked={this.props.logout}/> : <Signing />}
          </div>
        </div>
      </Auxa>
    )
  }
}

const mapStateToProps = state => {;
  return {
    isSignin: state.auth.isSignIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout()),
    checkAuth: () => dispatch(actions.checkAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
