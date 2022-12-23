import './ProductList.scss'
import { useContext } from 'react'
import { AppContext } from './App'
import ProductItem from './ProductItem'

function ProductList() {
  const { products } = useContext(AppContext)

  return (
    <div className="product-list__container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
