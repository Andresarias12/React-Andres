//import { useRef, useState } from "react"

import { useState, useTransition } from "react";

/*const Practica = () => {

    const [academia, setAcademia] = useState("Practicando");
    const divRef = useRef(null);

    const modificarTexto = () => {
        setAcademia("ya estoy practicando");
        divRef.current.innerHTML = "NO ES CURSO DE JAVASCRIPT"
        divRef.current.className = "tex-dark bg-light "
    }

    const numeroNuevo = useRef(null)

   const [Numeros2,setNumber] = useState(5)
   const modificarNumero = () => {
    setNumber(8)
  
   }
   const modificarNumero2 = () => {
    numeroNuevo.current.innerHTML = "colombia es el mejor"
    numeroNuevo.current.className = "bg-black text-white"
   }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Useref</h1>
                    <p>{academia}</p>
                    <p ref={divRef}>curso de javascript</p>
                    <p><button onClick={modificarTexto} className="btn btn-primary">modificar texto</button></p>
                    <p>El numero es {Numeros2}</p>
                    <p><button className="btn btn-primary"  onClick={modificarNumero}>Toca aca</button></p>
                    <p ref={numeroNuevo}>argentina es el mejor</p>
                    <p><button className="btn btn-primary" onClick={modificarNumero2}>toca aca para cambiar</button></p>
                </div>
            </div>
        </div>
    )
}




const Promesas = ({valor}) => {
   
    const [mensaje,setMensaje] = useState("");
   const promesa = new Promise((resolve,reject) => {
     if (valor > 5000) {
        resolve("no se puede realizar esta compra")
     }else{
        reject("compra realizada")
     }
   })
   promesa.then(data => {
    console.log(alert(data))
    setMensaje(error)
   }).catch(error => {
    console.log("Error" + error)
    setMensaje(error)
    
   }).finally(data => {
    console.log("hasta aca llego el proceso")
   })
   
   
    return (
        <h1>{mensaje}</h1>
    )
}





const EjemploPromesas = () => {
    const productosdos = [

        { id: 2, name: "Computadora Notebook Para Trabajo Estudio Core I5 Economica (Reacondicionado)", descripcion: "Ideal para Estudio, trabajos de oficina, y el hogar, Facil de transportar", precio: 25000, stock: 13 },
        { id: 3, name: "Notebook Hp Probook 440 G9 Intel I7 14 32gb Ram 512gb Ssd", descripcion: "Procesador: La laptop HP ProBook 440 ofrece a las empresas en crecimiento rendimiento profesional, HP Wolf Security for Business5 y durabilidad en un diseño compacto", precio: 50000, stock: 3 },
        { id: 4, name: "Notebook Lenovo V15 Core I5 1135g7 960gb Ssd 24gb W11 Cta", descripcion: " Lleva a cabo tus tareas de la oficina con eficiencia Mantiene tus negocios productivos y tus datos seguros Diseño más delgado y pequeño con marcos laterales más estrechos", precio: 100000, stock: 10 }
    ]
    console.log(productosdos)

    const promesa = new Promise((res) => {
        setTimeout(() => {
            res(productosdos)
        }, 6000)
    })
    promesa.then((result) => {
        console.log(result)
    })
}*/

const MetodoMAp = () =>{
  
    const productosdos = [

        { id: 2, name: "Computadora Notebook Para Trabajo Estudio Core I5 Economica (Reacondicionado)", descripcion: "Ideal para Estudio, trabajos de oficina, y el hogar, Facil de transportar", precio: 25000, stock: 13 },
        { id: 3, name: "Notebook Hp Probook 440 G9 Intel I7 14 32gb Ram 512gb Ssd", descripcion: "Procesador: La laptop HP ProBook 440 ofrece a las empresas en crecimiento rendimiento profesional, HP Wolf Security for Business5 y durabilidad en un diseño compacto", precio: 50000, stock: 3 },
        { id: 4, name: "Notebook Lenovo V15 Core I5 1135g7 960gb Ssd 24gb W11 Cta", descripcion: " Lleva a cabo tus tareas de la oficina con eficiencia Mantiene tus negocios productivos y tus datos seguros Diseño más delgado y pequeño con marcos laterales más estrechos", precio: 100000, stock: 10 }
    ]

    const ProductosIva = productosdos.map(item => ({nombreProductos: item.name, precioProductos: item.precio, stockProductos: item.stock}))
    console.log(ProductosIva);
  
  
    return(
    <h1>Map</h1>
  )
}



export default MetodoMAp