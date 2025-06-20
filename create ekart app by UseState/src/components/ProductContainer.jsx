import { useEffect, useState } from "react";
import { productData } from "../utils";
import Product from "./Product";
import Skleton from "./Skleton";
import usegetAllProduct from "../hooks/useGetAllProducts";
const ProductContainer = () => {
  // const [listProduct, setListProduct] = useState([]);
  const listProduct = usegetAllProduct();
  const [filterProduct, setFilterProduct] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [light, setLight] = useState(true);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); 

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       setLoading(true);
  //       const res = await fetch("https://fakestoreapi.com/products");
  //       const data = await res.json();
  //       // console.log(data);
  //       setListProduct(data);
  //     })();
  //   } catch (error) {
  //     console.log("Error", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  if (listProduct.length === 0) {
    return <Skleton />;
  }
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
        type="text"
        placeholder="search any product"
      />
      <button
        onClick={() => {
          const filterData = listProduct.filter((pro) =>
            pro?.title.toLowerCase().includes(search.toLowerCase())
          );
          setFilterProduct(filterData);
          setSearch("");
        }}
        className="search-btn"
      >
        search
      </button>
      <button
        className="top-button"
        onClick={() => {
          const filterProduct = productData.filter(
            (product) => product.rating.rate >= 4
          );
          let newToggle = !toggle;
          setToggle(newToggle);
          newToggle
            ? listProduct(filterProduct)
            : listProduct(productData);
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

      <div className="product-container">
        {listProduct.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductContainer;
