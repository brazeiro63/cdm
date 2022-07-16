import React from 'react'
import image1 from '../../images/Imoveis/ImovelMorro/ImovelMorro04.jpeg'
import image2 from '../../images/Imoveis/ImovelMorro/ImovelMorro13.jpeg'
import image3 from '../../images/Imoveis/ImovelMorro/ImovelMorro19.jpeg'
import image4 from '../../images/Imoveis/ImovelMorro/ImovelMorro22.jpeg'
import image5 from '../../images/Imoveis/ImovelMuro/ImovelMuro01.jpeg'
import image6 from '../../images/Imoveis/ImovelMuro/ImovelMuro04.jpeg'
import image7 from '../../images/Imoveis/ImovelMuro/ImovelMuro07.jpeg'
import image8 from '../../images/Imoveis/ImovelMuro/ImovelMuro10.jpeg'
import image9 from '../../images/Imoveis/ImovelPortoBelga/ImovelPortoBelga05.jpeg'
import image10 from '../../images/Imoveis/ImovelPortoAtlantis/ImovelPortoAtlantis01.jpeg'
import image11 from '../../images/Imoveis/ImovelPortoAtlantis/ImovelPortoAtlantis02.jpeg'
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
                    <li data-target="#myImoveis" data-slide-to="8"></li>
                    <li data-target="#myImoveis" data-slide-to="9"></li>
                    <li data-target="#myImoveis" data-slide-to="10"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--imoveis' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Casa confortável!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image2} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Quartos climatizados!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image3} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Cozinha com conceito aberto!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image4} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Cozinha equipada!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image5} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Ambiente agradável e com muito conforto!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image6} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Cozinha super equipada!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image7} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Dormitório amplo com armários e ar condicionado!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image8} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Condomínio com lazer completo!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--imoveis' src={image9} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Beira mar com piscina e muito luxo!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--imoveis' src={image10} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Em breve, kit studio a 100 m da praia!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--imoveis' src={image11} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Em breve, kit studio super confortável!</p>
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
