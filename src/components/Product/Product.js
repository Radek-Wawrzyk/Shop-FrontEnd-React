import React from 'react';

import watch from '../../assets/images/watch-4.png';
//classes
import classes from './Product.scss';


const product = (props) => (

    <div className={classes.Product} > 
        <figure><img src={props.imgUrl} alt="Watch"/> </figure>
        <h5>{props.product_name}</h5>
        <p className={classes.Price}>{props.price} zł</p>
        <span className={classes.More}>See More</span>
    </div>
)

export default product
