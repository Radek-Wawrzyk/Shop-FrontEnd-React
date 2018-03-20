//libraries
import React from 'react';
//styles
import classes from './Button.scss';

const button = (props) => {
  let formErr = null
  if (!props.formIsValid) {
    formErr = classes.FormErr
  }

  return (
    <button
      onClick={props.clicked}
      label={props.label}
      className={classes.Button + ' ' + formErr}>
      {props.children}
    </button>
  )

}

export default button;
