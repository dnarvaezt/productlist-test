import './Slogan.scss'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './App'

function Slogan() {
  const { products } = useContext(AppContext)

  const [firstProduct, setFirstProduct] = useState(products[0])
  const [productText, setProductText] = useState('')

  useEffect(() => {
    setFirstProduct(products[0])

    let text = ''

    const currentList: string[] = []

    products.forEach((item) => {
      if (!currentList.includes(item.value)) {
        currentList.push(item.value)
      }
    })

    if (currentList.length === 1) {
      text = products[0].value
    } else {
      currentList.forEach((item, index) => {
        text += index === currentList.length - 1 ? `and ${item} ` : `${item}, `
      })
    }

    setProductText(text)
  }, [products])

  return (
    <div className="slogan__container">
      <h4>Slogan</h4>
      <div className="slogan__info">
        <p>We sell: {productText}</p>
      </div>
    </div>
  )
}

export default Slogan
