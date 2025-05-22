import { useEffect, useState } from "react"

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState({})
    const {title, description, image, category, price, rating} = singleProduct
    useEffect(() => {
        (async () => {
            const res = await fetch("https://fakestoreapi.com/products/1");
            const data = await res.json();
            setSingleProduct(data)
            console.log(data)
        })()
    })
  return (
    <div className="product">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h3>{description}</h3>
      <p>Rating: {rating?.rate}</p>
      <p>Price: {price}</p>
      <p>category: {category}</p>
    </div>
  )
}

export default ProductDetails
