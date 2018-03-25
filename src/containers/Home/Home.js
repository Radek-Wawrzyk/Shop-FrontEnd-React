//libraries
import React from 'react';

import Slider from "../Slider/Slider";
import RecommendedProduct from "../../components/Home/RecommendedProduct/RecommendedProduct";
import PopularProduct from "../../components/Home/PopularProduct/PopularProduct";
import CompanyDescription from "../../components/Home/CompanyDescription/CompanyDescription";
import NewestComponent from '../../components/Home/NewestProduct/NewestProduct';
import SaleProduct from '../../components/Home/SaleProduct/SaleProduct';

//hoc
import Auxa from '../../hoc/Auxa/Auxa';

const home = (props) => (
  <Auxa>
    <Slider/>
    <RecommendedProduct/>
    <PopularProduct/>
    <CompanyDescription />
    <NewestComponent />
    <SaleProduct />
  </Auxa>
)

export default home;
