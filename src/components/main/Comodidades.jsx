import React from 'react'
import image1 from '../../images/comodidades/comodidades10.jpg' // cozinha equipada
import image2 from '../../images/comodidades/comodidades15.jpg' // cozinha equipada
import image3 from '../../images/comodidades/comodidades16.jpg' // restaurante muro alto
import image4 from '../../images/comodidades/comodidades07.jpg' // cozinha morro
import image5 from '../../images/comodidades/comodidades02.jpg' // parquinho muro alto
import image6 from '../../images/comodidades/comodidades03.jpg' // parquinho muro alto
import image7 from '../../images/comodidades/comodidades05.jpg' // churrasqueira morro
import image8 from '../../images/comodidades/comodidades04.jpg' // academina muro alto

import './comodidades.css'


export default function Comodidades() {

    return (

        <div className='comodidades--presentation' id='comodidades'>
            <div id="myComodidades" className="carousel slide comodidades--slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myComodidades" data-slide-to="0" className="active"></li>
                    <li data-target="#myComodidades" data-slide-to="1"></li>
                    <li data-target="#myComodidades" data-slide-to="2"></li>
                    <li data-target="#myComodidades" data-slide-to="3"></li>
                    <li data-target="#myComodidades" data-slide-to="4"></li>
                    <li data-target="#myComodidades" data-slide-to="5"></li>
                    <li data-target="#myComodidades" data-slide-to="6"></li>
                    <li data-target="#myComodidades" data-slide-to="7"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--comodidades' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Todos os imóveis</h3>
                            <p>Equipados com todos os eletrodomésticos para facilitar o preparo de alimentos</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--comodidades' src={image2} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Todos os imóveis</h3>
                            <p>Equipados com todos os eletrodomésticos para facilitar o preparo de alimentos</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--comodidades' src={image3} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Muro Alto</h3>
                            <p>Restaurante no condomínio serve café da manha e demais refeições,
                                além de petiscos e lanches durante todo o dia.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--comodidades' src={image4} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Cozinha completa para facilitar o preparo de alimentos</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--comodidades' src={image5} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Muro Alto</h3>
                            <p>Parquinho para a diversão da criançada.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--comodidades' src={image6} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Muro Alto</h3>
                            <p>Parquinho para a diversão da criançada.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--comodidades' src={image7} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Churrasqueira a gás ou carvão, para preparar aquele churrasco quando voltar da praia.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--comodidades' src={image8} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Muro Alto</h3>
                            <p>Academia, para continuar a manter a forma, mesmo quando estiver viajando.</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myComodidades" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myComodidades" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='comodidades--presentation--text'>
                <div className='comodidades--presentation--text--title'>
                    <p>Comodidades</p>
                </div>
                <div className='comodidades--presentation--text--body'>
                    <p>
                        Os imóveis são equipados com eletrodomésticos e utilidades necessários
                        para o preparo das refeições e conforto dos hóspedes.
                    </p>
                    <p>
                        Todos os quartos são climatizados e conectados com internet para que
                        você possa se divertir e eventualmente trabalhar, se for necessário.
                    </p>
                    <p>
                        Camas confortáveis e lençóis de boa qualidade.
                    </p>
                    <p>
                        Smart TV de telas grandes e WI-FI para você assistir aos seus
                        programas favoritos ao retornar dos passeios.
                    </p>

            </div>
        </div>
        </div >

    )
}
