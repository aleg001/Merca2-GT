import React from "react"
import Nav from 'Nav'

const Header = ({user}) => {

	(user === null) ? user = ' ': ''

    return (
        <header>
            <img src="./images/logo_merca2gt.png" alt="Logo de Merca2-gt" className="Header-logo"></img>
            <Nav/>
            <h3>{user}</h3>
        </header>
    )
}

export default Header