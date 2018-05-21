//libraries
import React from 'react';
import {NavLink} from 'react-router-dom';

// classes
import classes from './CartButton.scss';

// components
import Button from './../UI/Button/Button';


const cartButton = () => (
    <NavLink
    to={'/cart'}
    exact >
        <Button className={"fa fa-shopping-cart " + classes.CartBtn} aria-hidden="true">
            <span>5</span>
        </Button>
    </NavLink>
);

export default cartButton;


