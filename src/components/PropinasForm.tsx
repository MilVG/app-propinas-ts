import { Dispatch } from "react"
import { accionesPropinas } from "../reducers/order-reducer"
type PropinasFromProps = {
  propina: number
  dispatch: Dispatch<accionesPropinas>,
}
export default function PropinasForm({ propina, dispatch }: PropinasFromProps) {

  const opcionesPorcentaaje = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    }
  ]

  return (

    <div>
      <h3 className="font-black text-3xl">Propina:</h3>

      <form>
        {opcionesPorcentaaje.map(tip => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={e => dispatch({ type: 'porcentaje-propina', payload: { value: +e.target.value } })}
              checked={tip.value === propina}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
