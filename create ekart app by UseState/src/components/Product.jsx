import { useDispatch } from "react-redux";
import { addItems } from "../app/CartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleCartItem = () => {
    dispatch(addItems(product))
  }
if(!product){
  return 
}
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h3>{product.title.substr(0, 20)}</h3>
      <p>Rating: {product.rate}</p>
      <p>Price: {product.price}</p>
      <button onClick={handleCartItem} className="bg-blue-500 px-4 py-2 rounded-2xl w-49 cursor-pointer text-white">add cart</button>
    </div>
  );
};

export default Product;
