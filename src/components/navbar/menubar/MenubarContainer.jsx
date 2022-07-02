import React from 'react';
import MenuOption from './MenuOption';
import './menubarContainer.css';


const MenubarContainer = () => {

  return (
    <div className='menubar--container'>
      <MenuOption dest='#quemsomos' text='A empresa' /> {/* option="quemsomos"*/}
      <MenuOption dest='#imoveis' text='Imóveis' /> {/* option="imoveis"*/}
      <MenuOption dest='#comodidades' text='Comodidades' /> {/* option="comodidades"*/}
      <MenuOption dest='#passeios' text='Passeios' /> {/* option="passeios"*/}
      <MenuOption dest='#contato' text="Contato" /> {/* option="contato"*/}
      <MenuOption dest='#blog' text='Blog' /> {/* option="blog"*/}
    </div>
  )
}

export default MenubarContainer