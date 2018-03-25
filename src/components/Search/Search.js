import React from 'react';
import {connect} from 'react-redux';

//classes
import classes from './Search.scss';

// actionTypes
import * as actions from '../../store/actions/auth';

const search = (props) => (
  <button className={classes.BtnSearch} onClick={props.authStart}>
    <span className="fa fa-search" aria-hidden="true"></span>
  </button>
)

//redux

// state i actions na próbę
const mapStateToProps = (state, props) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(search)
