
import { productData } from '../utils'
import Product from './Product'


const ProductContainer = () => {
  return (
    <>
    <button>top rated</button>
    <div className='product-container'>
      {productData.map((product) => {
        <Product key={product.id} product={product} />
      })}
    </div>
    </>
  )
}

export default ProductContainer
