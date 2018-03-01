import React, {Component} from 'react';
import Signing from '../../components/Auth/Signing/Signing';
import Logout from '../../components/Auth/Logout/Logout';
import Auxa from '../../hoc/Auxa/Auxa';

class Auth extends Component {
  render () {
    return (
      <Auxa>
        <Signing />
        <Logout />
      </Auxa>
    )
  }
}

export default Auth
