import './ProductItem.scss'
import { FC, useContext, useEffect, useState } from 'react'
import { AppContext } from './App'

interface ProductItemProps {
  product: any
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { products, setProducts } = useContext(AppContext)

  const [showRemoveButton, setShowRemoveButton] = useState(true)

  const onRemoveItem = () => {
    if (products.length > 1) {
      setProducts(products.filter((currentProduct) => currentProduct.id !== product.id))
    }
  }

  useEffect(() => {
    setShowRemoveButton(products.length > 1)
  }, [products])

  return (
    <div className="product-item__container">
      <p>{product.value}</p>
      {showRemoveButton && <button onClick={onRemoveItem}>X</button>}
    </div>
  )
}

export default ProductItem
