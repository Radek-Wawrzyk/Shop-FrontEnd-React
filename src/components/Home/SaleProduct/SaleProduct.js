//libraries
import React from 'react';

//images
import Watch from './../../../assets/images/watch-2.png'

//classes
import classes from './SaleProduct.scss';

//components
import Button from '../../UI/Button/Button'

const saleProduct = () => {
    return (
    <section className={classes.SaleProduct}>
        <div className={classes.SaleProductWrapper}>
          <div className={classes.SaleProductItemHeader}>
            <h4 className={classes.SaleProductItemHeaderTitle}>Rolex 220fkk old premium</h4>
            <p className={classes.SaleProductItemHeaderDescription}>Jeden z najstarszych zegarków z naszego asortymentu, niecałe 2 sztuki</p>
          </div>
          <div className={classes.SaleProductItem}>
            <div className={classes.SaleProductItemContent}>
              <h5 className={classes.SaleProductItemContentTitle}>Rolex model ciul tam</h5>
              <p className={classes.SaleProductItemContentDescription}>No elegancki model w pytkę zbysia</p>
              <div className={classes.SaleProductItemPayment}>
                <p className={classes.SaleProductPrice}>20 000 zł</p>
                <Button className={classes.SaleProductBtn}>Kup teraz!</Button>
              </div>
            </div>
            <figure className={classes.SaleProductItemImg}>
              <img src={Watch} alt="watch model on sale" />
            </figure>
          </div>
        </div>
    </section>
    )
}

export default saleProduct;