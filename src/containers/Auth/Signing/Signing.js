import React, {Component} from 'react';
import classes from './Signing.scss';

import Register from '../../Register/Register';
import Login from '../../Login/Login';
//components
import Modal from '../../../components/UI/Modal/Modal'

class Signing extends Component {

  state = {
    openRegister: false,
    openLogin: false,
  }

  openRegister = () => {
     this.setState({
       openRegister: true,
     })
  }

  openLogin = () => {
     this.setState({
       openLogin: true,
     })
  }

  closeModal = () => {
     this.setState({
       openRegister: false,
       openLogin: false,
     })
  }

  render() {
    return (
      <div className={classes.Signing}>
        <Modal show={this.state.openRegister}>
          <Register clicked={() => this.closeModal()}/>
        </Modal>
        <Modal show={this.state.openLogin}>
          <Login clicked={() => this.closeModal()}/>
        </Modal>
        <button className={classes.SignIn} onClick={this.openLogin}>
          Zaloguj się
        </button>
        <button className={classes.SignUp} onClick={this.openRegister}>
          Zarejestruj
        </button>
      </div>
    )
  }
}

export default Signing
