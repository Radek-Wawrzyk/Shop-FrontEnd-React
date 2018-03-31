import React from 'react';

//classes
import classes from './ProductList.scss';

import Product from '../Product';
import Content from '../../../hoc/Content/Content';

// data
import data from './data';

const productList = (props) => (

    <Content className={classes.ProductList}> 
        {data.map((data, index) => {
            return (
                <Product key={index} {...data}/>
            )
        })}
    </Content>

)

export default productList