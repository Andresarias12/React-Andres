import {createContext, useState } from "react";


export const CartContext = createContext()

const ContextProvider = ({ children }) => {
   
    const contextProducto = [ 
    
    { id: 1, nombre: "Chaqueta columbia", categoria: "ropa",descripcion:"Chaqueta Columbia Powder Lite para hombre",stock: 10, precio: 120000, rutaImagen: "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1988723_010_f_om?wid=768&hei=806&v=1718652163" },
    { id: 2, nombre: "Chaqueta columbia", categoria: "ropa",descripcion:"Columbia Terminal Tackle - Sudadera con capucha para hombre",stock: 10, precio: 120000, rutaImagen: "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034506_352_f_om?wid=768&hei=806&v=1718652163" },
    { id: 3, nombre: "Chaqueta Yankee", categoria: "ropa",descripcion:"Cazadora varsity de cuello acabado en elástico con capucha" ,stock: 8, precio: 160000, rutaImagen: "https://static.zara.net/assets/public/5d21/72d5/27ce446ebc5b/03e744933a33/03833400800-e1/03833400800-e1.jpg?ts=1704357350922&w=316" },
    { id: 4, nombre: "Conjunto Lacoste", categoria: "ropa",descripcion:"Sportsuit Tennis Tracksuit" ,stock: 12, precio: 100000, rutaImagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw32782845/TH7609_G45_20.jpg?imwidth=915&impolicy=product" },
    { id: 5, nombre: "Nike Sportswear Tech Fleece", categoria: "ropa",descripcion:"Conjunto dry Track Squad nike " ,stock: 12, precio: 85000, rutaImagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/36c6fdbf-7c3a-47f9-8544-a2d2d4b570e1/sportswear-tech-fleece-windrunner-sudadera-con-capucha-con-cremallera-completa-Gj7pjn.png" },
    { id: 6, nombre: "Camisa Jordan", categoria: "ropa",descripcion:"Camisa de hombre regular fit en algodón liso" ,stock: 3, precio: 22000, rutaImagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/40536ff1-174d-44aa-a08b-543c36656718/jordan-air-camiseta-de-estiramiento-wnNt50.png" },
    { id: 7, nombre: "Pantalon Cargo Nike", categoria: "ropa",descripcion:"Pantalon Cargo Hombre Gabardina Elastizada Jogger Bolsillos",stock: 8, precio: 30000, rutaImagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2dc76c80-fc2b-4d24-9699-01b2277b8bf4/club-pantalon-cargo-2q1Swn.png" },
    { id: 8, nombre: "Pantalon Nike", categoria: "ropa",descripcion:"Pantalón de Running para Hombre", stock: 8, precio: 28000, rutaImagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/rhiqox5cfyn4mtdwpe5j/sportswear-club-jogger-sfrFst.png" },
    { id: 17, nombre: "Nike Air Max 1 SC Clear Jade", categoria: "calzado",descripcion:"Zapatillas de Moda para Hombre Nike", stock: 5, precio: 164999, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/731991-1000-1000?v=638308290816600000&width=1000&height=1000&aspect=true" },
    { id: 18, nombre: "Nike SB Dunk Low Pro Premium", categoria: "calzado",descripcion:"Zapatillas de Moda para Hombre Orange & Emerald Rise", stock: 5, precio: 239000, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/731642-1000-1000/DV5429_800_A_PREM.jpg?v=638308285241600000" },
    { id: 19, nombre: "Nike Air Flight Lite Mid", categoria: "calzado",descripcion:"Zapatillas de Moda para Hombre Nike", stock: 5, precio: 228900, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/702342-1000-1000/FJ2949_001_A_PREM.jpg?v=638233919899670000" },
    { id: 20, nombre: "Nike Air Force 1 Low Retro", categoria: "calzado",descripcion:"Zapatillas de Moda para Hombre Nike of the month", stock: 5, precio: 268000, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/732295-1000-1000/FN5924_102_A_PREM.jpg?v=638308295996730000" },
    { id: 21, nombre: "Jordan Essentials", categoria: "ropa",descripcion:"Pantalón Jordan para Hombre", stock: 5, precio: 109800, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/812220-1000-1000?v=638382459496430000&width=1000&height=1000&aspect=true" },
    { id: 22, nombre: "Jordan Essentials black", categoria: "ropa",descripcion:"Campera Jordan para Hombre impermeable con capucha", stock: 5, precio: 143990, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/880170-1000-1000?v=638467314037100000&width=1000&height=1000&aspect=true" },
    { id: 23, nombre: "Nike Sportswear Windrunne", categoria: "ropa",descripcion:"Campera de Moda para Hombre black and beish", stock: 5, precio: 144999, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/730454-1000-1000?v=638308267176330000&width=1000&height=1000&aspect=true" },
    { id: 24, nombre: "Nike Sportswear Tech", categoria: "ropa",descripcion:"Campera de Moda para Hombre orange pug unisex", stock: 5, precio: 459000, rutaImagen: "https://nikearprod.vtexassets.com/arquivos/ids/811082-1000-1000?v=638382439804130000&width=1000&height=1000&aspect=true" }
]
  
   
   const [carrito, setCarrito] = useState([])
    
    
    const agregarProductoCarrito = (id) => {
        const producto = contextProducto.find(item => item.id == id)
        setCarrito([...carrito, producto])
    }

    const addItem = (item,quantity) => {
        if (isInCart(item.id)) {
            const producto = carrito.find(prod => prod.id == item.id);
            producto.quantity += quantity
            console.log("cantidad", producto.quantity)
            setCarrito([...carrito])
        }else{
            setCarrito([...carrito, {...item, quantity:quantity}])
        }
    }

    const isInCart = (id) => {
        return carrito.some(item => item.id == id)
    }

    const removeItem = (id) => {
        const produc = carrito.filter(item => item.id != id)
        setCarrito([...produc])
    } 

    const totalProductos = () => {
        return carrito.reduce((acum, item) => acum += item.quantity, 0)
    }
    const carritoVacio = () => {
        setCarrito([])
    }

    const sumaProductos = () => {
        return carrito.reduce((acum, item) => acum += item.quantity * item.precio, 0)
    }

    return <CartContext.Provider value={{  addItem, removeItem, contextProducto, carrito, agregarProductoCarrito, totalProductos, carritoVacio, sumaProductos }}>
        {children}

    </CartContext.Provider>
}
export default ContextProvider