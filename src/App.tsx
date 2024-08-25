import { dataItems } from "./data/db"
import Launchitems from "./components/Launchitems"
import OrderContents from "./components/OrdersContents"
import OrderTotals from "./components/OrderTotals"
import PropinasForm from "./components/PropinasForm"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className="flex flex-row justify-center justify-items-center bg-gradient-to-r from-indigo-500">
        <h1 className=" text-6xl font-honk m-3">Cotizador de Propinas</h1>
      </header>

      <main className="grid md:grid-cols-2 mt-10">
        <div className="m-2">
          <h1 className="text-center">Menu</h1>
          {
            dataItems.map(item => (
              <Launchitems
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))
          }
        </div>

        <div className="m-2">
          <h1 className="text-center text-2xl font-bold">Consumo</h1>
          <div className="flex flex-col space-y-5 " >
            <OrderContents
              order={state.order}
              dispatch={dispatch}
            />
            <hr />
            <PropinasForm
              propina={state.propina}
              dispatch={dispatch}
            />
            <hr />
            <OrderTotals
              order={state.order}
              propina={state.propina}
              dispatch={dispatch}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
