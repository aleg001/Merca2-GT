import React from 'react'
import '../styles/footer.css'

const Footer = () => (
  <div className='main-footer'>
    <div className='container'>
      <div className='row'>
        {/* Primer columna */}
        <div className='col'>
          <h4 className='contact'>Contáctanos</h4>
          <ul className='list-unstyled'>
            <li>Tel: +502 XXXX - XXXX</li>
            <li>Correo: administracion@merca2gt.com</li>
          </ul>
          <br />
        </div>
      </div>
      <hr />
      <div className='row'>
        <br />
        <p className='col-sm'>
          {new Date().getFullYear()}
          Merca2-GT | Todos los derechos reservados
        </p>
      </div>
    </div>
  </div>
)

export default Footer
