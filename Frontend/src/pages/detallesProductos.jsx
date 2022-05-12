import React, { useEffect } from "react"
import Header from "../components/Header.jsx";
import Footer from '../components/footer.jsx'

import Contenido from "../styles/contenido_general.css"

const handleItems = (setItems, id) => {

    fetch("http://127.0.0.1:8000/getSelectedItem", {
        headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({
            id,
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log('items: ', result.items)
        setItems(result.items)
    })
    .catch(error => console.log('error', error));

}

const DetallesProductos = () => {

    const [items, setItems] = React.useState()
    
    useEffect(()=> {
        handleItems(setItems, 'item_prueba')
    },[])

    console.log('items dkljsjf: ', items)
    return (
        <React.Fragment>
            <Header title="Producto"/>
            <div className="content">
                {items && items.map((item,index) => {
                    return(
                        <div className= 'show'>
                            <div className="nameProduct">
                                <h1>{item.nombre}</h1>
                            </div>
                            <div key={index}> 
                            {item.precio}
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <Footer/>
        </React.Fragment>
    )
};

export default DetallesProductos;