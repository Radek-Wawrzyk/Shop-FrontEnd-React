import React, { Component } from 'react';

import classes from './Register.scss';
import Input from '../../components/UI/Input/Input';
import Logo from '../../assets/images/Rolex_Logo.png';

class Register extends Component {
    state = {
        orderForm: {
            username: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'User Name',
              },
              label: 'User Name',
              value: '',
              errormsg: 'Podałeś niepoprawne dane',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },

            password: {
              elementType: 'input',
              elementConfig: {
                type: 'password',
                placeholder: 'Password',
              },
              label: 'Password',
              value: '',
              errormsg: 'Podałeś niepoprawne hasło',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },

            firstname: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'First Name',
              },
              label: 'First Name',
              value: '',
              validation: {
                required: true
              },
                valid: false,
                touched: false
            },

            lastname: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'Last Name',
              },
              label: 'Last Name',
              value: '',
              validation: {
                required: true
              },
                valid: false,
                touched: false
            },

            email: {
              elementType: 'input',
              elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail',
              },
              label: 'Your E-Mail',
              value: '',
              validation: {
                required: true
              },
                valid: false,
                touched: false
            },

            city: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'City',
              },
              label: 'City',
              value: '',
              validation: {
                required: true
              },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }

    checkValiditiy(value, rules) {
      let isValid = true;

      if (!rules) {
        return true;
      }

      if (rules.required) {
        isValid = value.trim() !== '' && isValid;
      }

      return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
      const updatedOrderForm = {
        ...this.state.orderForm
      }
      const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
      }
      updatedFormElement.value = event.target.value;
      updatedFormElement.valid = this.checkValiditiy(updatedFormElement.value, updatedFormElement.validation);
      updatedFormElement.touched = true;
      updatedOrderForm[inputIdentifier] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }

      this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {
      const formElementsArray = [];
      for (let key in this.state.orderForm) {
        formElementsArray.push({
          id: key,
          config: this.state.orderForm[key]
        });
      }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                  <Input
                    key= {formElement.id}
                    label= {formElement.config.label}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    errormsg={formElement.config.errormsg}
                  />
                ))}
            </form>
        );

        return (
            <div className={classes.ContactData}>
                <img src={Logo} alt="Rolex Logo" className={classes.Logo}/>
                <span className={classes.CloseBtn} onClick={this.props.clicked}>X</span>
                <h4>Rejestracja</h4>
                {form}
            </div>
        );
    }
}

export default Register;
