import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail"
import arrayProductos from "./json/productos1.json"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {

        const Promomesa = new Promise(res => {
            setTimeout(() => {
                res(arrayProductos.find(item => item.id == id))
            }, 1000)

        })
        
        Promomesa.then(resultado => {
            setItem(resultado)
        })

    },[id])
   
    return (
        <ItemDetail item={item} />

    )
}

export default ItemDetailContainer





