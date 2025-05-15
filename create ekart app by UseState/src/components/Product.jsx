import { productData } from "../utils"


const Product = () => {
  return (
    <div>
        <img src="{productData.image}" alt="" />
     <h1>{productData.title}</h1>
     <p>Rating: {productData.rate}</p>
     <p>Price: {productData.price}</p>
    
    </div>
  )
}

export default Product
