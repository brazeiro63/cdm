import React from 'react'
import "./navbar.css";
import logo from "../../images/logo-1t.png";
import Menubar from '../navbar/menubar/Menubar';

const Navbar = () => {
  return (
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
          <Menubar />
        </div>
      </nav>
    </div>
  )
}

export default Navbar