import React, { Component } from 'react';
import axios from 'axios';

import classes from './Login.scss';
import Input from '../../components/UI/Input/Input';
import Logo from '../../assets/images/Rolex_Logo.png';
import Button from '../../components/UI/Button/Button';


const url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC9hjhSO0_Od1B6TMyxfOc6q0DmQDp9ewo";

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
          }
    }

    login = () => {

      const authData = {
        email: this.state.loginForm.email.value,
        password: this.state.loginForm.password.value,
      };

      axios.post(url, authData)
        .then(response => {
          console.log(response);
          console.log(response.data.idToken);
        })
        .catch(err=> {
          console.log(authData.email);
          console.log(authData.password);
          console.log(err.response.data.error);
        })
    }

    loginHandler = ( event ) => {
        event.preventDefault();
        this.login()
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
                <Button formIsValid={this.state.formIsValid}>Zaloguj</Button>
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

export default Login;
