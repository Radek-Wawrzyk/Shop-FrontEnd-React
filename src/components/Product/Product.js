import React from 'react';

//classes
import classes from './Product.scss';

const product = (props) => {
    return (
    <div className={classes.Product} > 
        <figure><img src={props.imgUrl} alt="Watch"/> </figure>
        <h5>{props.product_name}</h5>
        <p className={classes.Price}>{props.price} zł</p>
        <a href={props.match.url + '/' + props.id} className={classes.More}>See More</a>
    </div>
)}

export default product
