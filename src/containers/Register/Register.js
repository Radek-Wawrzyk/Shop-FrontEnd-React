import React, { Component } from 'react';
import axios from 'axios';

//images
import Logo from '../../assets/images/Rolex_Logo.png';

//components
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

//classes
import classes from './Register.scss';

const url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC9hjhSO0_Od1B6TMyxfOc6q0DmQDp9ewo";

class Register extends Component {
    state = {
        registerForm: {
            username: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'User Name',
              },
              label: 'User Name',
              value: '',
              errormsg: 'Twoja nazwa użytkownika musi posiadać conajmniej 3 znaki',
              validation: {
                required: true,
                minLength: 3,
              },
              valid: true,
            },

            password: {
              elementType: 'input',
              elementConfig: {
                type: 'password',
                placeholder: 'Password',
              },
              label: 'Password',
              value: '',
              errormsg: 'Twoja hasło musi musi posiadać conajmniej 5 znaków',
              validation: {
                required: true,
                minLength: 5,
              },
              valid: true,
            },

            firstname: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'First Name',
              },
              label: 'First Name',
              value: '',
              errormsg: 'Twoje imię musi posiadać conajmniej 2 znaki',
              validation: {
                required: true,
                minLength: 2,
              },
                valid: true,
            },

            lastname: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'Last Name',
              },
              label: 'Last Name',
              value: '',
              errormsg: 'Twoje nazwisko musi posiadać conajmniej 2 znaki',
              validation: {
                required: true,
                minLength: 2,
              },
                valid: true,
            },

            email: {
              elementType: 'input',
              elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail',
              },
              label: 'Your E-Mail',
              value: '',
              errormsg: 'Za krótki adres e-mail',
              validation: {
                required: true,
                minLength: 3,
              },
                valid: true,
            },

            city: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'City',
              },
              label: 'City',
              value: '',
              errormsg: 'Nazwa miasta musi posiadać conajmniej 2 znaki',
              validation: {
                required: true,
                minLength: 2,
              },
                valid: true,
            },

        },
        formIsValid: true,
    }


register = () => {

  const authData = {
    email: this.state.registerForm.email.value,
    password: this.state.registerForm.password.value,
  };

  axios.post(url, authData)
    .then(response => {
      console.log(response);
    })
    .catch(err=> {
      console.log(err.response.data.error);
    })
}

    registerHandler = ( event ) => {
        event.preventDefault();
        this.register()
        const formData = {}
        const updatedRegisterForm = {
          ...this.state.registerForm
        }
        for (let formElementIdentifier in this.state.registerForm) {
          formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
          updatedRegisterForm[formElementIdentifier].valid = this.checkValiditiy(updatedRegisterForm[formElementIdentifier].value, updatedRegisterForm[formElementIdentifier].validation);
        }
        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterForm) {
          formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({formIsValid: formIsValid});

    }

    checkValiditiy(value, rules) {
      let isValid = true;
      if (!rules) {
        return true;
      }

      if (rules.required) {
        isValid = value.trim() !== '' && isValid;
      }

      if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
      }

      return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
      const updatedRegisterForm = {
        ...this.state.registerForm
      }
      const updatedFormElement = {
        ...updatedRegisterForm[inputIdentifier]
      }
      updatedFormElement.value = event.target.value;
      updatedRegisterForm[inputIdentifier] = updatedFormElement;

      this.setState({registerForm: updatedRegisterForm });;
    }

    render () {
      const formElementsArray = [];
      for (let key in this.state.registerForm) {
        formElementsArray.push({
          id: key,
          config: this.state.registerForm[key]
        });
      }
        let form = (
            <form onSubmit={this.registerHandler}>
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
                <Button formIsValid={this.state.formIsValid}>Zarejestruj</Button>
            </form>
        );

        return (
            <div className={classes.Register}>
                <img src={Logo} alt="Rolex Logo" className={classes.Logo}/>
                <span className={classes.CloseBtn} onClick={this.props.clicked}>X</span>
                <h4>Rejestracja</h4>
                {form}
            </div>
        );
    }
}

export default Register;
