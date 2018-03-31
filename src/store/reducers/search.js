import * as actionTypes from '../actions/actionTypes'

// reducer
const initialState = {
    searchIsOpen: false,
}

const search = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.OPEN_SEARCH:
      return {
        ...state,
        searchIsOpen: !state.searchIsOpen,
      }
      default:
          return state;
    }
}

export default search