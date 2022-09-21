import React from 'react'
import image1 from '../../images/atracoes/morro/atracoesMorro05.jpg'
import image2 from '../../images/atracoes/morro/atracoesMorro07.jpg'
import image3 from '../../images/atracoes/morro/atracoesMorro08.jpg'
import image4 from '../../images/atracoes/morro/atracoesMorro09.jpg'
import image5 from '../../images/atracoes/porto/atracoesPorto13.jpg'
import image6 from '../../images/atracoes/porto/atracoesPorto09.jpg'
import image7 from '../../images/atracoes/porto/atracoesPorto14.jpg'
import './atracoes.css'


export default function Atracoes() {

    return (

        <div className='atracoes--presentation' id='atracoes'>
            <div className='atracoes--presentation--text'>
                <div className='atracoes--presentation--text--title'>
                    <p>Atrações</p>
                </div>
                <div className='atracoes--presentation--text--body'>
                    <p>
                        Os imóveis de Casas de Margarida estão localizados nas melhores praias 
                        do litoral Nordestino. Destinos avaliados nas melhores posições do ranking 
                        de praias e destinos turísticos de várias publicações.
                    </p><p>
                        Nas localidades de Morro de São Paulo, na Bahia, Muro Alto e Porto de Galinhas,
                        em Ipojuca, Pernambuco e em breve na praia de Pajuçara, em Maceio, estão à
                        disposição de nossos hóspedes as mais diversas atrações para enriquecer
                        a experiência da viagem.
                    </p>
                </div>
            </div>
            <div id="myAtracoes" className="carousel slide atracoes--slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myAtracoes" data-slide-to="0" className="active"></li>
                    <li data-target="#myAtracoes" data-slide-to="1"></li>
                    <li data-target="#myAtracoes" data-slide-to="2"></li>
                    <li data-target="#myAtracoes" data-slide-to="3"></li>
                    <li data-target="#myAtracoes" data-slide-to="4"></li>
                    <li data-target="#myAtracoes" data-slide-to="5"></li>
                    <li data-target="#myAtracoes" data-slide-to="6"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--atracoes' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Caminhadas à beira mar nos primeiros raios de sol são uma experiência incrível!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--atracoes' src={image2} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>A tiroleza da Primeira Praia é uma atração para disparar aquela adrenalina.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--atracoes' src={image3} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Os bares e restaurantes da Segunda Praia dão o melhor suporte para o banho de praia.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--atracoes' src={image4} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Você não pode perder o passeio Volta da Ilha. Passando pelas piscinas naturais,
                                restaurantes e outras atrações no entorno da Ilha de Tinharé.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--atracoes' src={image5} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Passeio de jangada até as piscinas naturais é uma experiência inesquecível.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--atracoes' src={image6} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>O calçadão de Porto de Galinhas oferece uma grande variedade de opções em lojas,
                                bares, restaurantes e lanchonetes.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--atracoes' src={image7} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Nada como um banho de mar nas lindas praias de Porto de Galinhas.</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myAtracoes" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myAtracoes" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
}
