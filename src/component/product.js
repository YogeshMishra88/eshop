import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import ProductList from './productlist';
import Title from './title';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return (
            <React.Fragment>
                 <div className="container">
                     <Title name="Our" title="Products" />
             {/* {
                this.state.Products.map(item=>{
                return <ProductList key={item.id} data={item}></ProductList>
                })
             } */}
            
                <ProductConsumer>
                {
                    value=>{
                         //console.log(value.products)
                        return  value.products.map(item=>{
                            return <ProductList key={item.id} data={item}></ProductList>
                    })
                }
            }
            </ProductConsumer>
            
            
            </div>
             </React.Fragment>
        )
    }
}

export default Product;