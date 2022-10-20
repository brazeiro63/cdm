import React from 'react'
import Navbar from './components/navbar/Navbar';
import Rodape from './components/main/Rodape';
import Carousel from './components/main/Carousel';
import Imoveis from './components/main/Imoveis';
import Comodidades from './components/main/Comodidades';
import Atracoes from './components/main/Atracoes';
import Anfitrioes from './components/main/Anfitrioes';
import './app.css';

const App = () => {
    return (
        <div className='app'>
            <div className='app--container'>
                <div className='app--header'>
                    <Navbar />
                </div>
                <div className='app--body'>
                    <Carousel />
                    <Imoveis />
                    <Comodidades />
                    <Atracoes />
                    <Anfitrioes />
                </div>
                <div className='app--footer'>
                    <Rodape ident='contato' />
                </div>
            </div>
        </div>
    )
}

export default App