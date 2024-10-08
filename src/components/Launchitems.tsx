import { Dispatch } from "react"
import { itemsLunch } from "../types"
import { accionesPropinas } from "../reducers/order-reducer"

type lauchProps = {
  item: itemsLunch,
  dispatch: Dispatch<accionesPropinas>
}

export default function Lauchitems({ item, dispatch }: lauchProps) {

  const { name, price, description } = item

  return (
    <>
      <button
        onClick={() => dispatch({ type: 'añadir-propinas', payload: { item: item } })}
        className="flex flex-row justify-between mx-auto my-2 bg-blue-200 hover:bg-blue-400 rounded-2xl">
        <div className="grid grid-cols-1 h-30 w-80 justify-items-start justify-start px-4 py-4">
          <h1 className="text-blue-500 text-xl font-bold">{name}</h1>
          <p className="text-justify line-clamp-2">{description}</p>
        </div>

        <div className=" w-20 mx-2 my-2 flex flex-col justify-end "><h1 className="text-2xl">${price}</h1></div>
      </button>
    </>
  )
}
