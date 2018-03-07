import React from 'react';

import classes from './Search.scss';
import SearchImg from '../../assets/images/search.png';

const search = () => (
  <button className={classes.Search}>
    <img src={SearchImg} alt="search"/>
  </button>
)

export default search
