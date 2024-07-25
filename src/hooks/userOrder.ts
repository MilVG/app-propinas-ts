import { useState } from "react"
import { itemsLunch, lunchOrder } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<lunchOrder[]>([])
  const [propina, setPropina] = useState(0)
  const additem = (item: itemsLunch) => {

    const itemExist = order.find(orderItem => orderItem.id === item.id)
    if (itemExist) {
      const updateOrder = order.map(orderItem => orderItem.id === item.id ?
        { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)

      setOrder(updateOrder)
    } else {

      const newItem: lunchOrder = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  const deleteItem = (id: itemsLunch['id']) => {
    setOrder(order.filter(item => item.id !== id))
  }

  const guardarOrder = () => {
    setOrder([])
    setPropina(0)

  }

  return {
    additem,
    order,
    deleteItem,
    propina,
    setPropina,
    guardarOrder
  }
}
