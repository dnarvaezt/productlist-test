import './App.scss'
import { createContext, useState } from 'react'
import { data } from './data'
import Header from './Header'
import ProductList from './ProductList'
import Slogan from './Slogan'

export const AppContext = createContext({
  products: [] as { id: string; value: string }[],
  setProducts: (data: any) => {},
})

function App() {
  const [products, setProducts] = useState(data)

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      <div className="App">
        <Header />
        <Slogan />
        <ProductList />
      </div>
    </AppContext.Provider>
  )
}

export default App
