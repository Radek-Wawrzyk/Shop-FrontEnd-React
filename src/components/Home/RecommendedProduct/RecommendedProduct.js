//libraries
import React from 'react';

//classes
import classes from './RecommendedProduct.scss';

//components
import Button from '../../UI/Button/Button';

const RecommendedProduct = (props) => (
  <section className={classes.RecommendedProduct}>
      <div className={classes.Product}>
        <figure className={classes.ProductImg}>
          <img src="https://www.pngarts.com/files/1/Rolex-PNG-Transparent-Image.png" alt="rolex yacht model" />
          <img src="https://www.pngarts.com/files/1/Rolex-PNG-Transparent-Image.png" alt="rolex yacht model opacity reflection " />
        </figure>
        <div className={classes.ProductContent}>
          <h2 className={classes.ProductContentTitle}>Super duper zegarek!</h2>
          <p className={classes.ProductContentDescription}>Zegarek z najwyższej jakości materiałów</p>
          <div className={classes.ProductContentPayment}>
            <p className={classes.ProductContentPrice}>10.000 zł</p>
            <Button className={classes.ProductBtnBuy}>Kup teraz</Button>
          </div>
        </div>
      </div>
  </section>
)

export default RecommendedProduct;
