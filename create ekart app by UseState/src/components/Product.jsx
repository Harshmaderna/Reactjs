import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../app/CartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  console.log(cartItem);
  const handleCartItem = () => {
    dispatch(addItems(product));
  };
  const handleRemoveCart = () => {
    dispatch(removeItems(product.id));
  };
  if (!product) {
    return;
  }
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h3>{product.title.substr(0, 20)}</h3>
      <p>Rating: {product.rate}</p>
      <p>Price: {product.price}</p>
      {cartItem.some((item) => item.id === product.id) ? (
        <button
          onClick={handleRemoveCart}
          className="bg-red-500 px-4 py-2 rounded-2xl w-49 cursor-pointer text-white"
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={handleCartItem}
          className="bg-blue-500 px-4 py-2 rounded-2xl w-49 cursor-pointer text-white"
        >
          add cart
        </button>
      )}
    </div>
  );
};

export default Product;
