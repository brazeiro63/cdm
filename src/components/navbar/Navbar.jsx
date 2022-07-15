import React from 'react'
import "./navbar.css";
import logo from "../../images/logo-1t.png";
// import Menubar from '../navbar/menubar/Menubar';

const Navbar = () => {
  return (
    <>
      <div className='navbar--row'>
        <nav className='navbar--column--left'>
          <div className='navbar--logo'>
            <img src={logo} alt='logo' />
          </div>
          {/* <div className='navbar--nome'>Casas de Margarida</div> */}
        </nav>
        <nav className='navbar--column--right'>
          <div className='navbar--user'>usuário</div>
          <div className='navbar--menubar'>
            {/* <Menubar /> */}
          </div>
        </nav>
      </div>


      <div className="navbar">
        <a href="#comodidades">Comodidades</a>
        <a href="#passeios">Passeios</a>
        <a href="#anfitrioes">Anfitriões</a>
        <div className="dropdown">
          <button className="dropbtn">Imóveis
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#morro">Morro de São Paulo</a>
            <a href="#muro">Muro Alto</a>
            <a href="#porto">Porto de Galinhas</a>
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar

