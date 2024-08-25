import { Dispatch, useMemo } from "react"
import { lunchOrder } from "../types"
import { formatCurrency } from "../helpers"
import { accionesPropinas } from "../reducers/order-reducer"

type OrderTotalsProps = {
  order: lunchOrder[],
  propina: number,
  dispatch: Dispatch<accionesPropinas>
}


export default function OrderTotals({ order, propina, dispatch }: OrderTotalsProps) {

  const subtotalPago = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  const montoPropina = useMemo(() => subtotalPago * propina, [propina, order])
  const montoTotal = useMemo(() => subtotalPago + montoPropina, [propina, order])
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl"> Totales y Propinas</h2>
        <p>Subtotal a pagar:{' '}
          <span className="font-bold">{formatCurrency(subtotalPago)}</span>
        </p>
        <p>Propina:{''}
          <span className="font-bold">{formatCurrency(montoPropina)}</span>
        </p>
        <p>Total a Pagar:{''}
          <span className="font-bold">{formatCurrency(montoTotal)}</span>
        </p>

        <button

          className="w-full bg-black p-3 uppercase text-white disabled:bg-gray-200"
          disabled={montoTotal === 0}
          onClick={() => dispatch({ type: 'guardar_order' })}
        >
          Guardar Order
        </button>
      </div>

      <button></button>
    </>
  )
}
