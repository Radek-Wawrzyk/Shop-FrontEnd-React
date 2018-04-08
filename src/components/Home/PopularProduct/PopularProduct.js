//libraries
import React from 'react';

//images
import Watch from '../../../assets/images/watch-1.png';

//classes
import classes from './PopularProduct.scss';

//components
import Button from '../../UI/Button/Button';

const PopularProduct = (props) => (
<section className={classes.PopularProducts}>
        <ul className={classes.PopularProductsList}>
          <li className={classes.ProductItem}>
            <a href="true">
              <div className={classes.ItemContent}>
                <h3 className={classes.ItemContentTitle}>Rolex <span>kaszana</span></h3>
                <p className={classes.ItemContentPrice}>20 000 zł</p>
              </div>
              <figure className={classes.ItemImg}>
                <img src={Watch} alt="watch" />
              </figure>
            </a>
          </li>
          <li className={classes.ProductItem}>
           <a href="true">
              <div className={classes.ItemContent}>
                <h3 className={classes.ItemContentTitle}>Rolex <span>kaszana</span></h3>
                <p className={classes.ItemContentPrice}>20 000 zł</p>
              </div>
              <figure className={classes.ItemImg}>
                <img src={Watch} alt="watch" />
              </figure>
            </a>
          </li>
          <li className={classes.ProductItem}>
            <a href="true">
              <div className={classes.ItemContent}>
                <h3 className={classes.ItemContentTitle}>Rolex <span>kaszana</span></h3>
                <p className={classes.ItemContentPrice}>20 000 zł</p>
              </div>
              <figure className={classes.ItemImg}>
                <img src={Watch} alt="watch" />
              </figure>
            </a>
          </li>
        </ul>
        <div className={classes.ProductSearchHelper}>
          {/* <div className={classes.ProductSearchHelperBox}/> */}
          <Button className={classes.ProductSearchHelperBtn}>Wyszukaj podobny produkt</Button>
        </div>
      </section>
)

export default PopularProduct;
