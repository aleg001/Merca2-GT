/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Header from '../Components/Header.jsx'
import Navbar from '../Components/navbar.jsx'

import '../styles/detallesProducto.css'



const userStats = () => {
  fetch('https://backend-merca2.onrender.com/statsQuery', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
    }),
  })
    .then((response) => response.json())
   
    .catch((error) => console.log('error', error))
}

const datosTable = [
    {
        stat: 'Cantidad de usuarios registrados',
        value: '20'
    },
    {
        stat: 'Cantidad de usuarios activos',
        value: '15'
    },
    {
        stat: 'Cantidad de usuarios admin',
        value: '5'
    },
    {  
        stat: 'Cantidad de productos',
        value: '25'
    }
]

const Stats = ({setOnShow }) => {
    const [datosTable1, setDatosTable1] = useState(datosTable)

  return (
    <>
      <Header
        title='Estadísticas'
        setOnShow={(Stats) => {
          setOnShow(Stats)
        }}
      />
       <Navbar setOnShow={setOnShow} />

      <div className='content'>
        <table>
            <thead>
                <tr>
                    <th>Estadística</th>
                    <th>Resultados</th>
                </tr>
       </thead>
       <tbody> 
        {datosTable1.map((item) => (
            <tr>
                <td>{item.stat}</td>
                <td>{item.value}</td>
            </tr>
            ))}
            </tbody>
        </table>

       
      </div>
      <footer>
        Merca2-GT | Tel: +502 5017 - 6509 | administracion@merca2gt.com
      </footer>
    </>
  )
}

// Props Validation
Stats.propTypes = {
  setOnShow: PropTypes.func.isRequired,
}

export default Stats
