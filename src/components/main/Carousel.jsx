import React from 'react'
import image1 from '../../images/carousel/carrossel02.jpg';
import image2 from '../../images/carousel/carrossel01.jpg';
import image3 from '../../images/carousel/carrossel03.jpg';
import image4 from '../../images/carousel/carrossel04.jpg';

import './carousel.css'


export default function Carousel() {

    return (

        <div className='presentation'>
            <div id="myCarousel" className="carousel slide slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--carousel' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo - Cairú(BA)</h3>
                            <p>Casa aconchegante na 4ª Praia</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--carousel' src={image2} alt="Muro Alto" />
                        <div className="carousel-caption">
                            <h3>Muro Alto - Ipojuca(PE)</h3>
                            <p>Apartamento super equipado no Muro Alto Condomínio Club!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--carousel' src={image3} alt="Porto de Galinhas" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas - Ipojuca(PE)</h3>
                            <p>Em breve, Muito conforto com pé na areia em Porto de Galinhas!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--carousel' src={image4} alt="Porto de Galinhas" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas - Ipojuca(PE)</h3>
                            <p>Em breve, Kit Studio super fofa a 100m da praia!</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='presentation--text'>
                <div className='presentation--text--title'>
                    <p>Casas de Margarida</p>
                </div>
                <div className='presentation--text--body'>
                    <p>
                        Casas de Margarida tem o melhor lugar para ficar,
                        seja para descansar ou trabalhar. São imóveis bem
                        localizados, nas melhores praias do Brasil, com todo
                        o conforto e praticidade para que suas viagens sempre
                        sejam momentos inesquecíveis.
                    </p>
                </div>
            </div>
        </div>

    )
}
