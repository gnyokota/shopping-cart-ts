import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  AddRemoveI,
  loadCurrentItem,
  LoadI,
} from "../../redux/shopping/shopActions";
import "./Products.scss";
import { Dispatch } from "react";

interface ProductsData {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface StateI {
  shopping: {
    products: ProductsData[];
  };
}

const ProductsList = ({ products, addToCart, loadCurrentItem }: any) => {
  return (
    <div>
      {products &&
        products.map((item: ProductsData) => (
          <div className="product" key={item.id}>
            <img
              src={item.image}
              alt="product img"
              className="product__image"
            />
            <div className="product__details" key={item.id}>
              <p className="details__title">{item.title}</p>
              <p className="details__desc">{item.description}</p>
              <p className="details__price">{`$: ${item.price}`}</p>
            </div>

            <div className="product__buttons">
              <Link to={`/product/${item.id}`}>
                <button
                  onClick={() => loadCurrentItem(item)}
                  className="buttons__btn buttons__view"
                >
                  View Item
                </button>
              </Link>
              <button
                onClick={() => addToCart(item.id)}
                className="buttons__btn buttons__add"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state: StateI) => {
  return {
    products: state.shopping.products,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AddRemoveI> & Dispatch<LoadI<ProductsData>>
) => {
  return {
    addToCart: (id: number) => dispatch(addToCart(id)),
    loadCurrentItem: (item: ProductsData) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
