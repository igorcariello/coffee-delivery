import { createContext, ReactNode, useState } from 'react'

export interface Coffee {
  id?: string
  imageCard?: string
  name: string
  tagCoffee?: string[]
  description?: string
  amountItem: number | string
  valueCoffee: number
}

interface Order {
  cep: number
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  methodpayment: string
}

interface CartContextType {
  cart: Coffee[]
  order: Order

  addItemToCart: (item: Coffee) => void
  sumValueItemsCart: () => number
  removeItemToCart: (removeItem: Coffee) => void
  updatedItemCart: (updatedItem: Coffee) => void
  createOrder: (data: Order) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])

  const defaultOrder: Order = {
    cep: 0,
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    methodpayment: '',
  }

  const [order, setOrder] = useState<Order>(defaultOrder)

  function addItemToCart(item: Coffee) {
    setCart((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.id === item.id,
      )
      if (itemIndex !== -1) {
        const updatedCart = [...prevState]
        const existingItem = updatedCart[itemIndex]
        updatedCart[itemIndex] = {
          ...existingItem,
          amountItem: Number(item.amountItem),
        }
        return updatedCart
      }

      return [...prevState, item]
    })
  }

  function sumValueItemsCart() {
    return cart.reduce(
      (sum, item) => sum + Number(item.amountItem) * item.valueCoffee,
      0,
    )
  }

  function removeItemToCart(coffeeToRemove: Coffee) {
    setCart((prevState) =>
      prevState.filter((item) => item.id !== coffeeToRemove.id),
    )
  }

  function updatedItemCart(updatedItem: Coffee) {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item,
      ),
    )
  }

  function createOrder(data: Order) {
    setOrder({
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      methodpayment: data.methodpayment,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        order,
        addItemToCart,
        sumValueItemsCart,
        removeItemToCart,
        updatedItemCart,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
