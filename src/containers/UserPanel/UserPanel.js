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

const token = localStorage.getItem('token');

class Auth extends Component {

componentDidMount() {
  
}
logout = () => {
  console.log('work');
 localStorage.removeItem('token');
 localStorage.removeItem('userId');
 this.setState({
   isSignin:false
 })
}


  render () {
    return (
      <Auxa>
        <div className={classes.UserPanel}>
          <Search />
          <div>
            {this.props.isSignin ? <Logout clicked={this.logout}/> : <Signing />}
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
    // checkLogin: () => dispatch(actions.checkLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
