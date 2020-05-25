import React,{Component} from 'react';

class ProductList extends Component {
    render(){
        const {img,title,price}=this.props.data;
        return (
            <div className="box">
                <div className="cart">
                    <img src={img} alt="productimage"></img>
                </div>
                <div className="cartRow">
                    <div className="title"><h3>{title}</h3></div>
                    <div className="price"><h3>{price}</h3></div>
                </div>
            </div>
        )
    }
}

export default ProductList;