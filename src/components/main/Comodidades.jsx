import React from 'react'
import image1 from '../../images/Comodidades/comodidades.jpeg'
import './comodidades.css'


export default function Comodidades() {

    return (

        <div className='comodidades--presentation' id='comodidades'>
            <div id="myComodidades" className="carousel slide comodidades--slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myComodidades" data-slide-to="0" className="active"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--comodidades' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Todos os imóveis</h3>
                            <p>Equipados com todos os eletrodomésticos para facilitar o preparo de alimentos</p>
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
                    <p>Nossos imóvel são localizados nas melhores áreas,
                        perto das praias mais famosas do Brasil. </p>
                    <p>Todos estão
                        completamente equipados, climatizados e conectados com
                        internet para que você possa se divertir e eventualmente
                        trabalhar, se for necessário.</p>
                    <p>Temos eletrodomésticos e utilidades necessários para o
                        preparo das refeições e conforto dos hóspedes.
                    </p>
                </div>
            </div>
        </div>

    )
}
