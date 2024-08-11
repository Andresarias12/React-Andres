import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import Productos from "./components/productos"
import ItemListContainer from "./components/itemListContainer"
import Footer from "./components/footer"

import ItemDetailContainer from "./components/itemDetailContainer";
import ContextProvider from "./components/Context";
import Carro from "./components/CarritoCompras";
import Checkout from "./components/FinalizarCompra";
import Error404 from "./components/Error404";



function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <ItemListContainer titulo={"Tienda Eleven"} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/category/:id" element={<Productos />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/CarritoCompras"  element={<Carro/>}/>
            <Route path="/FinalizarCompra" element={<Checkout/>}/>
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>

    </>
  )


}

export default App