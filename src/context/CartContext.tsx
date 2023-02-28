import { Product } from '@/types/Product'
import { createContext, useContext, useEffect, useState } from 'react'

type CartContextProps = {
  productos: Product[]
  getProductos: () => Product[]
  addProducto: (producto: Product) => void
  subQuantity: (producto: Product) => void
  removeProducto: (producto: Product) => void
  addQuantity: (producto: Product) => void
  getSubtotal: () => number
  clearCart: () => void
}

const CartContext = createContext<CartContextProps>({
  productos: [],
  getProductos: () => [],
  addProducto: () => null,
  subQuantity: () => null,
  removeProducto: () => null,
  addQuantity: () => null,
  getSubtotal: () => 0,
  clearCart: () => null,
})

export function useCart() {
  return useContext(CartContext)
}

type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [productos, setProductos] = useState<Product[]>([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setProductos(JSON.parse(cart))
    }
  }, [])

  const getProductos = () => {
    return productos
  }

  const addProducto = (producto: Product) => {
    const index = productos.findIndex(p => p.id === producto.id)
    const newProducts = [...productos]
    if (index === -1) {
      producto.quantity = 1
      newProducts.push(producto)
      setProductos(newProducts)
    } else {
      producto.quantity = (newProducts[index].quantity ?? 0) + 1
      newProducts[index] = producto
      setProductos(newProducts)
    }

    localStorage.setItem('cart', JSON.stringify(newProducts))
  }

  const addQuantity = (producto: Product) => {
    const index = productos.findIndex(p => p.id === producto.id)
    const newProducts = [...productos]
    producto.quantity = (newProducts[index].quantity ?? 0) + 1
    newProducts[index] = producto
    setProductos(newProducts)
    localStorage.setItem('cart', JSON.stringify(newProducts))
  }

  const subQuantity = (producto: Product) => {
    const index = productos.findIndex(p => p.id === producto.id)
    const newProducts = [...productos]
    producto.quantity = (newProducts[index].quantity ?? 0) - 1
    if (producto.quantity === 0) {
      newProducts.splice(index, 1)
      setProductos(newProducts)
      localStorage.setItem('cart', JSON.stringify(newProducts))
      return
    }
    newProducts[index] = producto
    setProductos(newProducts)
    localStorage.setItem('cart', JSON.stringify(newProducts))
  }

  const removeProducto = (producto: Product) => {
    setProductos(productos.filter(p => p.id !== producto.id))
  }

  const getSubtotal = () => {
    return productos.reduce(
      (acc, p) =>
        acc + (p.price - (p.discount * p.price) / 100) * (p.quantity ?? 1),
      0
    )
  }

  const clearCart = () => {
    setProductos([])
    localStorage.removeItem('cart')
  }

  return (
    <CartContext.Provider
      value={{
        productos,
        getProductos,
        addProducto,
        addQuantity,
        subQuantity,
        removeProducto,
        getSubtotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
