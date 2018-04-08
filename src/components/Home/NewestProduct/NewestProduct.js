//libraries
import React from 'react';

//classes
import classes from './NewestProduct.scss'; 

//components
import Button from '../../UI/Button/Button';

//images
import watch from '../../../assets/images/watch-3.png'

const newestProduct = () => {
    return (
      <section className={classes.NewestProduct}>
        <div className={classes.NewestProductItem}>
          <figure className={classes.NewestProductItemImg}>
            <img src={watch} alt="rolex yacht model" />
            <img src={watch} alt="rolex yacht model opacity reflection " />
          </figure>
          <div className={classes.NewestProductItemContent}>
            <h3 className={classes.NewestContentTitle}>Super duper zegarek!</h3>
            <p className={classes.NewestContentDescription}>Zegarek z najwyższej jakości materiałów</p>
            <div className={classes.NewestContentPayment}>
              <p className={classes.NewestContentPrice}>10.000 zł</p>
              <Button className={classes.NewestBtnBuy}>Kup teraz</Button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default newestProduct