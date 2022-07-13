import React from 'react'
import image1 from '../../images/morrosaopaulo-1.jpeg'
import image2 from '../../images/morrosaopaulo-2.jpeg'
import image3 from '../../images/morrosaopaulo-3.jpeg'
import image4 from '../../images/morrosaopaulo-4.jpeg'
import image5 from '../../images/morrosaopaulo-5.jpeg'
import image6 from '../../images/morrosaopaulo-6.jpeg'
import image7 from '../../images/morrosaopaulo-7.jpeg'
import image8 from '../../images/morrosaopaulo-8.jpeg'
import image9 from '../../images/morrosaopaulo-9.jpeg'
import image10 from '../../images/morrosaopaulo-10.jpeg'
import image11 from '../../images/morrosaopaulo-11.jpeg'
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
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                    <li data-target="#myCarousel" data-slide-to="6"></li>
                    <li data-target="#myCarousel" data-slide-to="7"></li>
                    <li data-target="#myCarousel" data-slide-to="8"></li>
                    <li data-target="#myCarousel" data-slide-to="9"></li>
                    <li data-target="#myCarousel" data-slide-to="10"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--carousel' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--carousel' src={image2} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--carousel' src={image3} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--carousel' src={image4} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--carousel' src={image5} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--carousel' src={image6} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--carousel' src={image7} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--carousel' src={image8} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--carousel' src={image9} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--carousel' src={image10} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--carousel' src={image11} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
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
                    <p>Casas de Margarida tem o melhor lugar para ficar enquanto você
                        aproveita suas férias. São imóveis bem localizados, nas melhores
                        praias do Brasil, com todo o conforto e praticidade para que suas
                        férias sejam um período de descanso inesquecível.</p>
                </div>
            </div>
        </div>

    )
}
