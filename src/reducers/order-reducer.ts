import { itemsLunch, lunchOrder } from "../types"

export type accionesPropinas =
  { type: 'añadir-propinas', payload: { item: itemsLunch } } |
  { type: 'eliminar-item', payload: { id: itemsLunch['id'] } } |
  { type: 'porcentaje-propina', payload: { value: number } } |
  { type: 'guardar_order' }


export type orderState = {

  order: lunchOrder[],
  propina: number
}

export const initialState: orderState = {
  order: [],
  propina: 0

}

export const orderReducer = (
  state: orderState = initialState,
  acciones: accionesPropinas
) => {
  switch (acciones.type) {
    case 'añadir-propinas':
      const itemExist = state.order.find(orderItem => orderItem.id === acciones.payload.item.id)

      let order: lunchOrder[] = []
      if (itemExist) {
        order = state.order.map(orderItem => orderItem.id === acciones.payload.item.id ?
          { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)

        //setOrder(updateOrder)
      } else {

        const newItem: lunchOrder = { ...acciones.payload.item, quantity: 1 }
        order = [...state.order, newItem]

      }

      return {
        ...state,
        order
      }
    case 'eliminar-item':

      const DeleteItem = state.order.filter(item => item.id !== acciones.payload.id)

      return {
        ...state,
        order: DeleteItem
      }

    case 'porcentaje-propina':
      const propina = acciones.payload.value
      return {
        ...state,
        propina
      }

    case 'guardar_order':

      return {
        order: [],
        propina: 0
        //state: [],
        //propina: 0
      }

    default:
      return state
  }
}
