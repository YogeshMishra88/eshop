import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
           <div class="menu">
               <div class="leftMenu">
                   <h4><i>e</i>Mobile</h4>
                </div>
               <div class="rightMenu">
                   <button id="myCart">My Cart</button>
               </div>
           </div>
        )
    }
}

export default Navbar;