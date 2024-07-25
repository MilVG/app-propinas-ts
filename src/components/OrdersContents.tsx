
import { formatCurrency } from "../helpers"
import { lunchOrder, itemsLunch } from "../types"

type OrderContentsProps = {
  order: lunchOrder[],
  deleteItem: (id: itemsLunch['id']) => void
}
export default function OrderContents({ order, deleteItem }: OrderContentsProps) {

  return (
    <div>
      {order.length === 0 ?
        <p className={order.length === 0 ? 'text-red-600 text-2xl text-center font-bold' : ''}> LA ORDEN ESTÁ VACIA</p>
        : (
          order.map(item => (
            <div key={item.id} className="bg-purple-100 my-2 mx-2 flex flex-row justify-between p-2 rounded-lg">

              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad:{item.quantity}
                </p>
              </div>
              <div className="bg-red-100- w-1/5 flex flex-row justify-center justify-items-center">
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-purple-400 w-8 m-3 rounded-lg text-xl font-bold hover:bg-purple-600">x</button>
              </div>
            </div>

          ))
        )}
    </div>
  )
}
