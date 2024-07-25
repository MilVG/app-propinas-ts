import { dataItems } from "./data/db"
import Launchitems from "./components/Launchitems"
import useOrder from "./hooks/userOrder"
import OrderContents from "./components/OrdersContents"
import OrderTotals from "./components/OrderTotals"
import PropinasForm from "./components/PropinasForm"
function App() {

  const { additem, order, deleteItem, propina, setPropina, guardarOrder } = useOrder()

  console.log(propina);

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
                additem={additem}
              />
            ))
          }
        </div>

        <div className="m-2">
          <h1 className="text-center text-2xl font-bold">Consumo</h1>
          <div className="flex flex-col space-y-5 " >
            <OrderContents
              order={order}
              deleteItem={deleteItem}
            />
            <hr />
            <PropinasForm
              setPropina={setPropina}
              propina={propina}
            />
            <hr />
            <OrderTotals
              order={order}
              propina={propina}
              guardarOrder={guardarOrder}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
