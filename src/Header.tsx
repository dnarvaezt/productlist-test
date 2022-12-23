import './Header.scss'
import { useContext, useRef } from 'react'
import { AppContext } from './App'
import { uuidV4 } from './uuid'

function Header() {
  const inputRef = useRef(null)
  const { products, setProducts } = useContext(AppContext)

  const onNewProduct = () => {
    const targer: any = inputRef.current
    const value = targer.value
    targer.value = ''

    if (products.length < 5) {
      products.push({ id: uuidV4(), value })
      setProducts([...products])
    }
  }

  return (
    <div className="header__container">
      <input ref={inputRef} type="text" placeholder="Inset fruit" />
      <button onClick={onNewProduct}>+</button>
    </div>
  )
}

export default Header
