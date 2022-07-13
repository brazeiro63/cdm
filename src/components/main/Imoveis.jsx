import React from 'react'
import image1 from '../../images/morrosaopaulo-1.jpeg'
import image2 from '../../images/morrosaopaulo-2.jpeg'
import image3 from '../../images/morrosaopaulo-3.jpeg'
import image4 from '../../images/morrosaopaulo-4.jpeg'
import image5 from '../../images/portodegalinhas-1.jpeg'
import image6 from '../../images/portodegalinhas-2.jpeg'
import image7 from '../../images/portodegalinhas-3.jpeg'
import image8 from '../../images/portodegalinhas-4.jpeg'
import './imoveis.css'


export default function Imoveis() {

    return (

        <div className='imoveis--presentation' id='imoveis'>
            <div className='imoveis--presentation--text'>
                <div className='imoveis--presentation--text--title'>
                    <p>os imóveis</p>
                </div>
                <div className='imoveis--presentation--text--body'>
                    <p>Casas de Margarida busca oferecer imóveis nas melhores praias do
                        nordeste do Brasil.</p>
                    <p>Em Morro de São Paulo, na Bahia, oferecemos ums bela casa de 110 m<sup>2</sup>
                        muito aconchegante, com 3 dormitórios, sendo dois no térreo e um no mezanino.
                        Sala de estar, sala de jantar e cozinha com conceito aberto. Todos os dormitórios
                        contam com condicionador de ar e armários.
                    </p><p>
                        Em Ipojuca, Pernambuco, você pode desfrutar da comodidade de um condomínio
                        com toda estrutura de lazer de um clube, em Muro Alto, onde oferecemos um
                        aconchegante apartamento de um dormitório, com sala e cozinha bem equipados.
                    </p><p>Em breve, estará disponivel nossa nova acomodação. Pé na areia de Porto
                        de Galinhas. Um luxuoso apartamento de 105 m<sup>2</sup>, com trẽs dormitórios
                        onde vamos oferecer experiências inesquecíveis em finais de semana memoráveis.</p>
                </div>
            </div>
            <div id="myImoveis" className="carousel slide imoveis--slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myImoveis" data-slide-to="0" className="active"></li>
                    <li data-target="#myImoveis" data-slide-to="1"></li>
                    <li data-target="#myImoveis" data-slide-to="2"></li>
                    <li data-target="#myImoveis" data-slide-to="3"></li>
                    <li data-target="#myImoveis" data-slide-to="4"></li>
                    <li data-target="#myImoveis" data-slide-to="5"></li>
                    <li data-target="#myImoveis" data-slide-to="6"></li>
                    <li data-target="#myImoveis" data-slide-to="7"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--imoveis' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image2} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image3} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image4} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image5} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image6} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image7} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image8} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myImoveis" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myImoveis" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
}
