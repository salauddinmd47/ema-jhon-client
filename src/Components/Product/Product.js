import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
const Product = ({product,handleAddToCart}) => {
    const {name, img, stock, seller, price,star} = product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-title'>{name}</h4>
                <p>by:{seller}</p>
                <p>{price}</p>
                <p><small>Only {stock} is in stock, order soon</small></p>
                <p>
                    <Rating
                    initialRating={star}
                    emptySymbol="far fa-star star-icon"
                    fullSymbol="fas fa-star star-icon"
                    readonly
                /></p>
                <button onClick={()=>handleAddToCart(product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>add to cart</button>
            </div>
        </div>
    );
};

export default Product;