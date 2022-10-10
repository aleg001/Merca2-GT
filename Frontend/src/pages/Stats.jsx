/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Header from '../Components/Header.jsx'

import '../styles/detallesProducto.css'



const userStats = (setItems) => {
  fetch('http://127.0.0.1:8000/statsQuery', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      setItems(result.items)
    })
    .catch((error) => console.log('error', error))
}



const Stats = ({ username, setOnShow }) => {


  return (
    <>
      <Header
        title='Estadísticas'
        setOnShow={(Stats) => {
          setSelectedProduct(false)
          setOnShow(Stats)
        }}
      />
      <div className='content'>
        {items &&
          items.map((item, index) => (
            <div className='wrapper'>
              <div className='main-grid'>xw
                <div className='seller-info'>
                <div className='product-info'>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <Footer/> */}
    </>
  )
}

// Props Validation
Stats.propTypes = {
  setOnShow: PropTypes.func.isRequired,
}

export default Stats
