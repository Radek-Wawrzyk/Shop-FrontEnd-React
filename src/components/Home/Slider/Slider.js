//libraries
import React from 'react';
import classes from "./Slider.scss";

const slider = (props) => (
  <section className={classes.slider}>
    <ul className={classes.slider_list}>
      <li className={classes.slider_item}>
        <div className={classes.slider_item_content}>
          <h1 className={classes.slider_item_title}>Rolex aka "zielone szkiełko"</h1>
          <p className={classes.slider_item_description}>Zegarek z najwyższej jakości materiałów nie dla biedaków</p>
          <div className={classes.slider_item_payment}>
            <button className={classes.button}>Kup teraz</button>
            <p>10.000 zł</p>
          </div>
        </div>
      </li> 
    </ul>
    <ul className={classes.slider_dots}>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
)

export default slider;