import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import CartItem from '../CartItem/CartItem';
const OrderReview = () => {
    const [products] = useProducts()
    const [cart,setCart] = useCart(products)
    
    const handleRemove = key =>{
        const remainingProduct = cart.filter(product=> product.key !== key) ;
        setCart(remainingProduct);
        removeFromDb(key)
    }
    return (
        <div className='shop-container'>
             
             <div className="products-container">
                {
                    cart.map(product=> <CartItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></CartItem>)
                }
             </div>
             <div className="cart-container">
                 <Cart
                  cart={cart}
                  
                 ></Cart>
             </div>
        </div>
    );
};

export default OrderReview;