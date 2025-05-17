const Product = ({ product }) => {
if(!product){
  return <p>product data is not found</p>
}
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h3>{product.title.substr(0, 20)}</h3>
      <p>Rating: {product.rate}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;
