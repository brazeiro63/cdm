import React from 'react'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Carousel from './components/main/Carousel';
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
                    <Main ident='quemsomos' />
                    <Main ident='imoveis' />
                    <Main ident='comodidades' />
                    <Main ident='passeios' />
                    <Main ident='contato' />
                    <Main ident='blog' />
                </div>
                <div className='app--footer'>

                </div>
            </div>
        </div>
    )
}

export default App