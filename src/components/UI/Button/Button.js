//libraries
import React from 'react';
//styles
import classes from './Button.scss';

const button = (props) => (
  <button
    onClick={props.clicked}
    label={props.label}
    className={[classes[props.btnType]].join(' ')}>
    {props.children}
  </button>)

export default button;
