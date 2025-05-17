import { useEffect, useState } from "react";
import { productData } from "../utils";
import Product from "./Product";
import Skleton from "./Skleton";
const ProductContainer = () => {
  const [listProduct, setListProduct] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [light, setLight] = useState(true);
  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      try {
        (async () => {
          setLoading(true)
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setListProduct(data);
      })();
      } catch (error) {
        console.log("Error", error)
      } finally{
        setLoading(false)
      }
      
    }, []);
  
  if (loading) {
    return <Skleton />;
  }
  return (
    <>
      <div className="btn">
        <button
          className="top-button"
          onClick={() => {
            const filterProduct = productData.filter(
              (product) => product.rating.rate >= 4
            );
            let newToggle = !toggle;
            setToggle(newToggle);
            newToggle
              ? setListProduct(filterProduct)
              : setListProduct(productData);
          }}
        >
          {toggle ? "All Product" : "Top Rated Product"}
        </button>
        <button
          className="dark"
          onClick={() => {
            setLight(!light);
          }}
        >
          {light ? "Light" : "Dark"}
        </button>
      </div>
      <div className="product-container">
        {listProduct.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductContainer;
