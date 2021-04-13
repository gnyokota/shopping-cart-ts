import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { connect } from "react-redux";

interface ProductInCartI {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  qty: number;
}

interface StateI {
  shopping: {
    cart: ProductInCartI[];
  };
}

function Navbar({ cart }: any) {
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item: ProductInCartI) => {
      count = +(count + item.qty);
    });
    setCartCounter(count);
    //everytime that the cart updates, this useEffect will run
  }, [cart, cartCounter]);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <img
            className="cart__image"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className="cart__counter">{cartCounter}</div>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state: StateI) => {
  return {
    cart: state.shopping.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
