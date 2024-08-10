import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail"

import { useParams } from "react-router-dom"

import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

   
    const [items,setItems] = useState({})
    const { id } = useParams()
   

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", id)
        getDoc(docRef).then(documents => {
            if (documents.exists()) {
                setItems({ id: documents.id, ...documents.data() })
            } else {
                console.log("no existe!")
            }
        })

    }, [id])

  
   
    return (
        <ItemDetail item={items} />

    )
}


export default ItemDetailContainer





