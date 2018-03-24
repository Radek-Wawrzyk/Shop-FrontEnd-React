// libraries
import React from 'react';
//classes
import classes from './Logout.scss';

const logout = (props) => (
<div className={classes.Logout}>
  <p>Witaj<span>Imię</span></p>
  <p className={classes.Log} onClick={props.clicked}>Wyloguj</p>
</div>
)

export default logout