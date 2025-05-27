
import { useParams } from "react-router-dom"
import useGetSigleProduct from "../hooks/UseGetSingleProduct"

const ProductDetails = () => {
  const { productId } = useParams()
  const singleProduct = useGetSigleProduct(productId)
  if(!singleProduct) return <h3>Loading...</h3>
    const {title, description, image, category, price, rating} = singleProduct
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
