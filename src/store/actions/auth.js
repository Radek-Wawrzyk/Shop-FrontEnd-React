import axios from 'axios';

import * as actionTypes from './actionTypes';

export const login = (email, password) => {

  return dispatch => {

    const authData = {
      email: email,
      password: password,
    };

    // url for login
    const url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC9hjhSO0_Od1B6TMyxfOc6q0DmQDp9ewo";

    axios.post(url, authData)
      .then(response => {
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId)
        // console.log(response);
        // console.log(response.data.idToken);
        dispatch(signInSuccess(response.data.idToken, response.data.localId));
        dispatch(closeModal());
      })
      .catch(err=> {
        console.log(err.response.data.error);
      })
    }
};

export const checkAuth = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (token){
      dispatch(signInSuccess())
    }
    else {
      dispatch(logout())
    }
  }
}

export const signInSuccess = (token, userId) => {
  return {
    type: actionTypes.SIGNIN,
    token: token,
    userId: userId,
    isSignIn: true
  };
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.LOGOUT,
  };
}

export const openRegister = () => {
  return {
    type: actionTypes.OPEN_REGISTER,
  };
};

export const openLogin = () => {
  return {
    type: actionTypes.OPEN_LOGIN,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};

export const toggleMobile = () => {
  return {
    type: actionTypes.TOGGLE_MOBILE,
  };
};
