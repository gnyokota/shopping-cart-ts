import React, { Dispatch, useState } from "react";
import "./CartItem.scss";
import { connect } from "react-redux";
import {
  removeFromCart,
  AddRemoveI,
  adjustQty,
  AdjustI,
} from "../../../redux/shopping/shopActions";

const CartItem = ({ item, removeFromCart, adjustQty }: any) => {
  const [input, setInput] = useState(item.qty);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    //do not use the input state, it takes sometime to be updated.
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.image} alt="item-img" />
      <div className="cartItem__details">
        <p className="details__title">{item.title}</p>
        <p className="details__desc">{item.description}</p>
        <p className="details__price">{`$ ${item.price}`}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty">Qty.</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={item.qty}
            onChange={handleChange}
          />
        </div>
        <button
          className="actions__deleteItemBtn"
          onClick={() => removeFromCart(item.id)}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<AddRemoveI> & Dispatch<AdjustI>
) => {
  return {
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    adjustQty: (id: number, value: number) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
