import Navbar from "./components/NavBar"
import Productos from "./components/productos"
import ItemListContainer from "./components/itemListContainer"
import NikeExperience from "./components/NikeExperience"
import Footer from "./components/footer"
import Titulo2 from "./components/titulo2"



function App() {
  return (
    <>

      <ItemListContainer titulo={"Tienda Eleven"}  />
      <Navbar />
      <NikeExperience/>
      <Titulo2 titulodos={"La mejor tienda online"} />
      <Productos />
      <Footer/>
      
      







    </>
  )


}

export default App