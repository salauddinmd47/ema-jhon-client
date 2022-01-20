import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };
  useEffect(() => {
    const savedCart = getStoredCart();
    if (products.length) {
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const searchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(searchedProduct);
  };
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="search product"
        />
        <span style={{ color: "white", marginLeft: "5px" }}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        <span
          style={{ marginLeft: "5px", color: "goldenrod", fontWeight: "700" }}
        >
          {cart.length}
        </span>
      </div>
      <div className="shop-container">
        <div className="products-container">
          {displayProducts.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to='/review'>
              <button className="btn-regular">Order Review</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
