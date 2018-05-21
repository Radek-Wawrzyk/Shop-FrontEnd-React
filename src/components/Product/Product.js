import React from 'react';
import {NavLink} from 'react-router-dom';

//classes
import classes from './Product.scss';

const product = (props) => {
    console.log(props.match.url);
    return (
    <div className={classes.Product} > 
        <figure><img src={props.imgUrl} alt="Watch"/> </figure>
        <h5>{props.product_name}</h5>
        <p className={classes.Price}>{props.price} zł</p>
        <NavLink to={props.match.url + '/' + props.id} className={classes.More}>See More</NavLink>
    </div>
)}

export default product
