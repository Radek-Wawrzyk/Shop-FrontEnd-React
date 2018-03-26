import React from 'react';

import classes from './CartButton.scss';

const cartButton = () => (
    <button className={"fa fa-shopping-cart" + " " + classes.CartBtn} aria-hidden="true">
     <span>5</span>
    </button>
);

export default cartButton;


