import React from 'react';
import {connect} from 'react-redux';

//classes
import classes from './Search.scss';

// actionTypes
import * as actions from '../../store/actions/search';

const search = (props) => (
  <button className={classes.BtnSearch} onClick={props.toggleSearch}>
    <span className="fa fa-search" aria-hidden="true"></span>
  </button>
)

//redux

const mapStateToProps = (state, props) => {
  return {
    searchIsOpen: state.search.searchIsOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
		toggleSearch: () => dispatch(actions.toggleSearch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(search)
