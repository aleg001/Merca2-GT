import React, { useEffect } from "react"
import Header from "../components/Header.jsx";
import Footer from '../components/footer.jsx'


import "../styles/detallesProducto.css"

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
        setItems(result.items)
    })
    .catch(error => console.log('error', error));

}

const handleSellerName = (setSellerName, setSellerLastName, id) => {
    
    fetch("http://127.0.0.1:8000/getSellerName", {
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
        setSellerName(result.user[0].name)
        setSellerLastName(result.user[0].lastname)
    })
    .catch(error => console.log('error', error));

}

const handleSellerPic = (setSellerPic, id) => {
    
    fetch("http://127.0.0.1:8000/getSellerPic", {
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
        console.log('lkdsjflksadj', result.user)
        setSellerPic(result.user[0].profile_pic)
    })
    .catch(error => console.log('error', error));

}

const DetallesProductos = () => {

    const [items, setItems] = React.useState()
    const [sellerPic, setSellerPic] = React.useState()
    const [sellerName, setSellerName] = React.useState()
    const [sellerLastName, setSellerLastName] = React.useState()
    
    useEffect(()=> {
        handleItems(setItems, 'item_prueba')
    },[])

    useEffect(() => {
        items && items.map((item) => {
            handleSellerPic(setSellerPic, item.id_usuario)
            handleSellerName(setSellerName, setSellerLastName, item.id_usuario)
        }
    )}, [items])

    console.log('items dkljsjf: ', items)
    return (
        <React.Fragment>
            <Header title="Producto"/>
            <div className="content">
                {items && items.map((item,index) => {
                    return(
                        <div className="wrapper">
                            <div className="main-grid">
                                <div className="seller-info">
                                    <div className="profile-pic">
                                        <img id="img_profile" src={sellerPic} />
                                    </div>
                                    <div className="seller-data">
                                        <div className="seller-name" >
                                            <h1 key={index}>Publicado por: {sellerName} {sellerLastName}</h1>
                                            
                                        </div>
                                        <div className="publication-time"  >
                                            {/* <!-- Hora de publicación --> */}
                                            <h3 key={index}>Publicado a las {item.post_time} </h3>
                                            
                                        </div>
                                        <div className="stars">
                                            {/* <!-- Calificación con estrellas --> */}
                                            <button className="star">&#9733;</button>
                                            <button className="star">&#9733;</button>
                                            <button className="star">&#9733;</button>
                                            <button className="star">&#9733;</button>
                                            <button className="star">&#9734;</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info" >
                                    <div className="product-name">
                                        {/* <!-- Nombre de producto --> */}
                                        <h1 key={index}>{item.nombre}</h1>
                                    </div>
                                    <div className="image-grid">
                                        {/* <!-- Imágen de producto --> */}

                                    </div>
                                </div>
                                <div className="product-footer">
                                    <div className="product-details">
                                        <div className="price" >
                                            {/* <!-- Precio --> */}
                                            <h3 key={index} >Q. {item.precio}</h3>
                                        </div>
                                        <div className="description">
                                            <p key={index}>{item.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact">
                                    {/* <!-- Contacto --> */}
                                    <a href="#" className="myButton">Contactar</a>
                                </div>
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