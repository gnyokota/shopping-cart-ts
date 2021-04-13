import React, { useState, useEffect } from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
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

type Prop = {
  cart: ProductInCartI[];
};

const Cart: React.FC<Prop> = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price: number = 0;
    let items: number = 0;

    cart.forEach((item) => {
      items = +(items + item.qty);
      price = parseFloat((price + item.qty * item.price).toFixed(2));
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems]);

  return (
    <div className="cart">
      <div className="cart__items">
        {cart &&
          cart.map((item) => (
            <CartItem
              key={item.id}
              //I need to define the props type in the child first, otherwise it will not work;
              item={item}
            />
          ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span>{`TOTAL: (${totalItems} items)`}</span>
          <span>{`$ ${totalPrice}`}</span>
        </div>
        <button className="summary__checkoutBtn">Proceed To Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateI) => {
  return {
    cart: state.shopping.cart,
  };
};

export default connect(mapStateToProps)(Cart);
