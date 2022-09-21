import React from 'react';
import MenuOption from './MenuOption';
import './menubarContainer.css';


const MenubarContainer = () => {

  return (
    <div className='menubar--container'>
      <MenuOption dest='#imoveis' text='Imóveis' /> {/* option="imoveis"*/}
      <MenuOption dest='#comodidades' text='Comodidades' /> {/* option="comodidades"*/}
      <MenuOption dest='#atracoes' text='Atrações' /> {/* option="atracoes"*/}
      <MenuOption dest='#anfitrioes' text='Anfitriões' /> {/* option="quemsomos"*/}
      <MenuOption dest='#contato' text="Contato" /> {/* option="contato"*/}
    </div>
  )
}

export default MenubarContainer 