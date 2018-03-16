import React from 'react';
import classes from './Input.scss';


const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let errorMsg = null
    if (!props.invalid && props.shouldValidate) {
      inputClasses.push(classes.Invalid);
      errorMsg = props.errormsg
    }

    switch(props.elementType) {
      case('input'):
        inputElement = <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}/>;
        break;
      default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}/>;
    }

    return (
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        <p className={classes.ErrorMsg}>{errorMsg}</p>
      </div>
  )
}

export default input;
