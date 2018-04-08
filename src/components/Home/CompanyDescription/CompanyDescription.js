//libraries
import React from 'react';

//classes
import classes from './CompanyDescription.scss'; 

const companyDescription = () => {
    return (
        <section className={classes.Company}>
        <div className={classes.CompanyContent}>
          <figure className={classes.CompanyImg}>
            <img src="http://www.pngmart.com/files/4/Rolex-Logo-PNG-File.png" alt="watchshop logo" />
          </figure>
          <p className={classes.CompanyDescription}>
            <span>Lorem </span>ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, 
            ipsam enim ea optio at numquam nostrum aliquid velit quod, iusto 
            reprehenderit molestias illo eius fugiat soluta, quasi rerum vitae tempore.
          </p>
        </div>
      </section>
    )
}

export default companyDescription