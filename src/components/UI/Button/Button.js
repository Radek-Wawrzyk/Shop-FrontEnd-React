//libraries
import React from 'react';
//styles
import classes from './Button.scss';

const button = (props) => {
  return (
    <button
      onClick={props.clicked}
      label={props.label}
      className={classes.Button + ' ' + props.className}>
      {props.children}
    </button>
  )

}

export default button;
