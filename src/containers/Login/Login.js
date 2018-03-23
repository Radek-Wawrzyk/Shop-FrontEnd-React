// libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// images
import Logo from '../../assets/images/Rolex_Logo.png';

// components
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

// classes
import classes from './Login.scss';

//actions
import * as actions from '../../store/actions/auth';

class Login extends Component {
    state = {
        loginForm: {
            email: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'Email',
              },
              label: 'E-Mail',
              value: '',
            },

            password: {
              elementType: 'input',
              elementConfig: {
                type: 'password',
                placeholder: 'Password',
              },
              label: 'Password',
              value: '',
            },
          },
        isLogin: false,
    }

    loginHandler = ( event ) => {
        event.preventDefault();
        this.props.login(this.state.loginForm.email.value, this.state.loginForm.password.value);
        const formData = {}
        for (let formElementIdentifier in this.state.loginForm) {
          formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
      const updatedLoginForm = {
        ...this.state.loginForm
      }
      const updatedFormElement = {
        ...updatedLoginForm[inputIdentifier]
      }
      updatedFormElement.value = event.target.value;
      updatedLoginForm[inputIdentifier] = updatedFormElement;

      this.setState({loginForm: updatedLoginForm });;
    }

    render () {
      const formElementsArray = [];
      for (let key in this.state.loginForm) {
        formElementsArray.push({
          id: key,
          config: this.state.loginForm[key]
        });
      }
        let form = (
            <form onSubmit={this.loginHandler}>
                {formElementsArray.map(formElement => {
                  return (
                  <Input
                    key={formElement.id}
                    label= {formElement.config.label}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    invalid={formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    errormsg={formElement.config.errormsg}
                  />
                )}
              )}
              <Button>Zaloguj</Button>
            </form>
        );

        return (
            <div className={classes.Login}>
                <img src={Logo} alt="Rolex Logo" className={classes.Logo}/>
                <span className={classes.CloseBtn} onClick={this.props.clicked}>X</span>
                <h4>Zaloguj</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
  return {
    isSignIn: state.auth.isSignIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
