import React from 'react';

import classes from './Search.scss';
import SearchImg from '../../assets/images/search.png';

const search = () => (
  <div className={classes.Search}>
    <img src={SearchImg} alt="search"/>
  </div>
)

export default search
