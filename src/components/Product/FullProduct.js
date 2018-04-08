import React, { Component } from 'react';

//hoc
import Content from './../../hoc/Content/Content'

//data
import data from './ProductList/data';

class FullProduct extends Component {
    render () {
    let match = this.props.match
    const product = data.find(({id} ) => {
        return (
            id == match.params.id)  
    } )
    console.log(this.props);
        return (
            <Content> 
                <div>
                    {product.id}
                    <br />
                    {product.product_name}
                    <br />
                    {product.description}
                    <img src={product.imgUrl} alt="watch"/>
                 </div>
            </Content>

        )
    }
}

export default FullProduct