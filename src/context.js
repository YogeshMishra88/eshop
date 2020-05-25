import React,{Component} from 'react';

import {storeProducts,detailsProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            products:storeProducts,
            detailsProduct:detailsProduct
        }
    }

    handleDetails = ()=>{
        console.log('Hello from handle details method')
    }

    addedCart = ()=>{
        console.log('Hello from added card method')
    }
    render(){
        return (
            <ProductContext.Provider value={{ 
                    ...this.state,
                    handleDetails:this.handleDetails,
                    addedCart:this.addedCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
