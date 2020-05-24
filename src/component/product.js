import React, { Component } from 'react';
import {storeProducts,detailsProduct} from '../data';

import ProductList from './productlist';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            Products : storeProducts
        }
    }
    render(){
        console.log(this.state.Products);
        return (
            <div className="container">
            {
                this.state.Products.map(item=>{
                return <ProductList data={item}></ProductList>
                })
            }
            </div>
           
        )
    }
}

export default Product;