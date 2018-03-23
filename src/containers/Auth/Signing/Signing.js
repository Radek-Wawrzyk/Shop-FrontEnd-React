// libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';

//components
import Modal from '../../../components/UI/Modal/Modal'

//containers
import Register from '../../Register/Register';
import Login from '../../Login/Login';

//classes
import classes from './Signing.scss';

//actions
import * as actions from '../../../store/actions/auth';

class Signing extends Component {


  render() {
    return (
      <div className={classes.Signing}>
        <Modal show={this.props.registerIsOpen}>
          <Register clicked={this.props.closeModal}/>
        </Modal>
        <Modal show={this.props.loginIsOpen}>
          <Login clicked={this.props.closeModal} loginClick={this.props.loginClick}/>
        </Modal>
        <button className={classes.SignIn} onClick={this.props.openLogin}>
          Zaloguj się
        </button>
        <button className={classes.SignUp} onClick={this.props.openRegister}>
          Zarejestruj
        </button>
      </div>
    )
  }
}

// redux
const mapStateToProps = (state, props) => {
    return {
        registerIsOpen: state.auth.registerIsOpen,
        loginIsOpen: state.auth.loginIsOpen,
    }
}

const mapDispatchToProps = dispatch => {
  return {
		openRegister: () => dispatch(actions.openRegister()),
		openLogin: () => dispatch(actions.openLogin()),
		closeModal: () => dispatch(actions.closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signing)
