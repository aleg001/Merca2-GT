import React from 'react'

import Header from '../components/Header.jsx'
import Navbar from '../Components/navbar.jsx'
import ItemVerProductos from '../Components/itemVerProductos.jsx'

const handleItemsUser = (setItems, id_usuario) => {

  var requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id_usuario,
    }),
    redirect: 'follow'
  };
 
  fetch("http://127.0.0.1:8000/getItemsUser", requestOptions)
    .then(response => response.json())
    .then (result => {
      setItems(result.items)
    })
  }


const VerProducto = ({ userName,setOnShow}) => {
    const [items, setItems] = React.useState()
    React.useEffect(()=>{
      handleItemsUser(setItems,userName)
      },[])
    
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