import React from 'react';

const CartItem = ({product, handleRemove}) => {
    const { name, price, key,quantity } = product;
 
    return (
        <div className='product'>
           <div>
           <h2 className='product-title'>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <button onClick={()=>handleRemove(key)} className='btn-regular'>Remove</button>
           </div>
        </div>
    );
};

export default CartItem;