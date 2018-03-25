//libraries
import React from 'react';
import classes from "./SliderItem.scss";

const sliderItem = (props) => {

return (

<li className={classes.SliderItem + " " + props.isActive}>
  <div className={classes.SliderContent}>
    <h2 className={classes.SliderContentTitle}>{props.product_name}</h2>
    <p className={classes.SliderContentDescription}>{props.description}</p>
    <div className={classes.SliderContentPayment}>
      <button className={classes.BtnBuy}>Kup teraz</button>
      <p className={classes.SliderContentPrice}>{props.price} zł</p>
    </div>
  </div>

  <div className={classes.SliderImg}>
    <img src={props.imgUrl} alt="rolex yacht model"/>
    <img src={props.imgUrl} alt="rolex yacht model opacity reflection " />
  </div>
</li>
)}

export default sliderItem
