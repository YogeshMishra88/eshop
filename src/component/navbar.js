import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
           <div className="menu">
               <div className="leftMenu">
                   <h4><i>e</i>Mobile</h4>
                </div>
               <div className="rightMenu">
                   <button id="myCart">My Cart</button>
               </div>
           </div>
        )
    }
}

export default Navbar;