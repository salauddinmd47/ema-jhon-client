import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header' >
            <img style={{ width:'300px',paddingTop:'10px' }} src={logo} alt="" />
             <nav  >
                 <a href="/">Shope</a>
                 <a href="/review">Order Review</a>
                 <a href="/Inventory">Manage Inventory</a>
             </nav>
        </div>
    );
};

export default Header;