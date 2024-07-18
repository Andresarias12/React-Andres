import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import Productos from "./components/productos"
import ItemListContainer from "./components/itemListContainer"
import NikeExperience from "./components/NikeExperience"
import Footer from "./components/footer"
import Titulo2 from "./components/titulo2"

import Promesas from "./components/practica"
import EjemploPromesas from "./components/practica"
import MetodoMAp from "./components/practica"
import Fetch from "./components/productos"
import Promocion from "./components/promocion";
import ItemDetailContainer from "./components/itemDetalContainer";



function App() {
  return (
    <>

      <BrowserRouter>
        <ItemListContainer titulo={"Tienda Eleven"} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/promociones" element={<Promocion />} />
          <Route path="/category/:id" element={<Productos />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )


}

export default App