import React,{Component} from 'react';

class ProductList extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="box">
                from ProductList Component
            </div>
        )
    }
}

export default ProductList;