import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return(
           <div class="menu">
               <div class="leftMenu">
                    <h4>eMobile</h4>
                </div>
               <div class="rightMenu">
                   <h3>cart</h3>
               </div>
           </div>
        )
    }
}

export default Navbar;