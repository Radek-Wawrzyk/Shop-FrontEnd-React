//libraries
import React from 'react';
import {NavLink} from 'react-router-dom';

// classes
import classes from './CartButton.scss';



const cartButton = () => (
    <NavLink
    to={'/cart'}
    exact >
        <button className={"fa fa-shopping-cart " + classes.CartBtn} aria-hidden="true">
            <span>5</span>
        </button>
    </NavLink>
);

export default cartButton;


