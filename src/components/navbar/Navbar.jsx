import React from 'react'
import "./navbar.css";
import logo from "../../images/logo.png";

// import Menubar from '../navbar/menubar/Menubar';

const Navbar = () => {
  return (
    <>
      <div className='navbar--row'>
        <nav className='navbar--column--left'>
          <div className='navbar--logo'>
            <img className='navbar--logo--img' src={logo} alt='logo' />
          </div>
        </nav>
        <nav className='navbar--column--right'>
          <div className='navbar--user'></div>
          <div className='navbar--nome--maior'>
            <p>
              Comece a programar suas férias agora
            </p><p>
              <a href="http://www.airbnb.com.br/p/casasdemargarida">Clique e reserve!</a> 
            </p>
          </div><div className='navbar--nome--menor'>
            <p>
              Morro de São Paulo - Porto de Galinhas - Maceio
            </p>
          </div>
          <div className='navbar--menubar'>
            {/*<Menubar />*/}
          </div>
        </nav>
      </div>


      <div className="navbar">
        <a href="#imoveis">Imóveis</a>
        <a href="#comodidades">Comodidades</a>
        <a href="#atracoes">Atrações</a>
        <a href="#anfitrioes">Anfitriões</a>
        <a href="#contato">Contato</a>
      </div>


    </>
  )
}

export default Navbar

