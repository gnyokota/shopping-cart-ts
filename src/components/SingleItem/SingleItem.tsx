import React, { Dispatch } from "react";
import "./SingleItem.scss";
import { connect } from "react-redux";
import { AddRemoveI, addToCart } from "../../redux/shopping/shopActions";

interface ProductsI {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface StateI {
  shopping: {
    currentItem: ProductsI | null;
  };
}

const SingleItem: React.FC<any> = ({ currentItem, addToCart }) => {
  return (
    currentItem && (
      <div className="singleItem">
        <img className="singleItem__image" src={currentItem.image} alt="" />
        <div className="singleItem__details">
          <p className="details__title">{currentItem.title}</p>
          <p className="details__description">{currentItem.description}</p>
          <p className="details__price">{`$ ${currentItem.price}`}</p>

          <button
            onClick={() => addToCart(currentItem.id)}
            className="details__addBtn"
          >
            Add To Cart
          </button>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state: StateI) => {
  return {
    currentItem: state.shopping.currentItem,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AddRemoveI>) => {
  return {
    addToCart: (id: number) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
