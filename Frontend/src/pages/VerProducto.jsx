import React from 'react'

import Header from '../components/Header.jsx'
import Navbar from '../Components/navbar.jsx'
import ItemVerProductos from '../Components/itemVerProductos.jsx'

const handleItemsUser = (setItems, id_usuario) => {

  var requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      id_usuario,
    }),
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/getItemsUser", requestOptions)
    .then(response => response.json())
    .then(result => setItems(result.items))
    .catch(error => console.log('Error en handleItemsUser', error));
  }

const VerProducto = ({ userName,setIsRegis, idUser,setOnShow }) => {
    const [items, setItems] = React.useState()
    const [idSelectedProduct, setIdSelectedProduct] = React.useState()
    const [selectedProduct, setSelectedProduct] = React.useState(false)
    const [idUser1, setIdUser1] = React.useState('')

   React.useEffect(() => {
        handleItemsUser(setItems, idUser1)
      }, [])
    
    return(<>
       <div className='content'>
      <Header title='Mis productos' user={userName} />
      <Navbar setOnShow={setOnShow} />
      <div className='container'>
        {items &&
          items.map((item, index) => (
            <ItemVerProductos
              itemName={item.nombre}
              itemLocation={item.ubicacion}
              itemPrice={item.precio}
              itemPublishDate={item.post_time}
              itemImage={item.image}
              key={index}
              itemId={item.id}
              setIdSelectedProduct={setIdSelectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
      </div>

     
      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </div>
    </>)
}

export default VerProducto