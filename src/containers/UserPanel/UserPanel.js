import React, {Component} from 'react';
import Signing from '../Auth/Signing/Signing';
import Logout from '../../components/Auth/Logout/Logout';
import Search from '../../components/Search/Search';
import Auxa from '../../hoc/Auxa/Auxa';

import classes from './UserPanel.scss';

class Auth extends Component {
  state = {
    isSignin: true,
  }

  changeSignHandler = () => { // Narazie tylko na próbę
     this.setState({
       isSignin: !this.state.isSignin
     })
  }

  render () {
    return (
      <Auxa>
        <div className={classes.UserPanel}>
          <Search />
          <div>
            {this.state.isSignin ? <Signing /> : <Logout /> }
          </div>
        </div>
      </Auxa>
    )
  }
}

export default Auth
