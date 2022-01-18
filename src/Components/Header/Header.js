import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header' >
            <img style={{ width:'300px',paddingTop:'10px' }} src={logo} alt="" />
             <nav  >
                 <a href="/shope">Shope</a>
                 <a href="/Inventory">Inventory</a>
                 <a href="/Orders">Orders</a>
             </nav>
        </div>
    );
};

export default Header;