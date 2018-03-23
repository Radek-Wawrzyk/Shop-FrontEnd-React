import React from 'react';

import classes from './Modal.scss';
import Auxa from '../../../hoc/Auxa/Auxa';

const modal = (props) => {
  return (
      <Auxa>
          <div
              className={classes.Modal}
              style={{
                  transform: props.show ? 'translateY(0)' : 'translateY(-150vh)',
                  opacity: props.show ? '1' : '0.0' }}>
              {props.children}
          </div>
      </Auxa>
  )
}

export default modal;
