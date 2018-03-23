import * as actionTypes from '../actions/actionTypes'

// reducer
const initialState = {
  isSignIn: false,
  registerIsOpen: false,
  loginIsOpen: false,
  active: false,
  hide: true,
}


 const reducer = (state = initialState, action) => {
    switch (action.type) {
      // case actionTypes.AUTH_START: return authStart(state, action)
      case actionTypes.SIGNIN:
      return {
        ...state,
        isSignIn: action.isSignIn,
      }
      case actionTypes.OPEN_REGISTER:
      return {
        ...state,
        registerIsOpen:true,
      }
      case actionTypes.OPEN_LOGIN:
      return {
        ...state,
        loginIsOpen:true,
      }
      case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        registerIsOpen:false,
        loginIsOpen: false
      }
      case actionTypes.TOGGLE_MOBILE:
      return {
        ...state,
        active: !state.active,
        hide: !state.hide,
      }
      default:
          return state;
    }
}

export default reducer
