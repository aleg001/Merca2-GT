import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Primer columna */}
                        <div className="col">
                            <h4 className='contact'>Contáctanos</h4>
                            <ul className="list-unstyled">
                                <li>Tel: +502 XXXX - XXXX</li>
                                <li>Correo: administracion@merca2gt.com</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Merca2-GT | Todos los derechos reservados 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;