//libraries
import React from 'react';
import classes from "./SliderItem.scss";

const sliderItem = (props) => (

<li className={classes.SliderItem + " " + props.isActive}>
  <div>
    <h1>{props.product_name}</h1>
    <p className={classes.Slider_item_description}>{props.description}</p>
    <div className={classes.Slider_item_payment}>
      <button>Kup teraz</button>
      <p>{props.price} zł</p>
    </div>
  </div>
</li>
)

export default sliderItem
