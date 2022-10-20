import React from 'react'
import image1 from '../../images/imoveis/imovelMorro/imovelMorro01.jpg'
import image2 from '../../images/imoveis/imovelMorro/imovelMorro02.jpg'
import image3 from '../../images/imoveis/imovelMorro/imovelMorro07.jpg'
import image4 from '../../images/imoveis/imovelMorro/imovelMorro06.jpg'
import image5 from '../../images/imoveis/imovelMuro/imovelMuro21.jpg'
import image6 from '../../images/imoveis/imovelMuro/imovelMuro18.jpg'
import image7 from '../../images/imoveis/imovelMuro/imovelMuro07.jpg'
import image8 from '../../images/imoveis/imovelMuro/imovelMuro26.jpg'
import image9 from '../../images/imoveis/imovelPortoBelga/imovelPortoBelga01.jpg'
import image10 from '../../images/imoveis/imovelPortoBelga/imovelPortoBelga04.jpg'
import image11 from '../../images/imoveis/imovelPortoBelga/imovelPortoBelga03.jpg'
import image12 from '../../images/imoveis/imovelPortoBelga/imovelPortoBelga02.jpg'
import image13 from '../../images/imoveis/imovelPortoAtlantis/imovelPortoAtlantis01.jpg'

import './imoveis.css'


export default function imoveis() {

    return (

        <div className='imoveis--presentation' id='imoveis'>
            <div className='imoveis--presentation--text'>
                <div className='imoveis--presentation--text--title'>
                    <p>Os imóveis</p>
                </div>
                <div className='imoveis--presentation--text--body'>
                    <p>
                        Casas de Margarida oferece imóveis nas melhores praias do nordeste do Brasil.
                    </p>
                    <p>
                        <strong>Morro de São Paulo</strong> - Cairú(BA) - casa de 110 m<sup>2</sup>&nbsp; na Quarta Praia,
                        muito aconchegante e cercada de verde. Acomoda até 8 pessoas.
                    </p>
                    <p>
                        <strong>Muro Alto</strong> - Ipojuca(PE) - flat confortável para até 4 pessoas.  Dentro
                        de um condomínio com toda estrutura de lazer
                    </p>
                    <p>
                        <strong>Pajuçara</strong> - Maceió(AL) - apto duplex para até 6 pessoas.  Excelente
                        localização, em frente as piscinas de Pajuçara, e próximo a tudo.
                    </p>
                    <p>
                        <strong>Porto de Galinhas</strong> - Ipojuca(PE) (Em breve) - apartamento de 105 m<sup>2</sup>&nbsp;- para até 8 
                        pessoas. Pé na areia, na melhor localização de Porto de Galinhas.
                    </p>
                </div>
            </div>

            <div id="myimoveis" className="carousel slide imoveis--slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myimoveis" data-slide-to="0" className="active"></li>
                    <li data-target="#myimoveis" data-slide-to="1"></li>
                    <li data-target="#myimoveis" data-slide-to="2"></li>
                    <li data-target="#myimoveis" data-slide-to="3"></li>
                    <li data-target="#myimoveis" data-slide-to="4"></li>
                    <li data-target="#myimoveis" data-slide-to="5"></li>
                    <li data-target="#myimoveis" data-slide-to="6"></li>
                    <li data-target="#myimoveis" data-slide-to="7"></li>
                    <li data-target="#myimoveis" data-slide-to="8"></li>
                    <li data-target="#myimoveis" data-slide-to="9"></li>
                    <li data-target="#myimoveis" data-slide-to="10"></li>
                    <li data-target="#myimoveis" data-slide-to="11"></li>
                    <li data-target="#myimoveis" data-slide-to="12"></li>
                    <li data-target="#myimoveis" data-slide-to="13"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--imoveis' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Casa confortável com vários ambientes para relaxar e bater papo!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image2} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Ambientes aconchegantes para todos os momentos.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image3} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Uma fogueira para aquecer as conversas na noite.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image4} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Espaço externo com churasqueira, tanto a gás quanto a carvão.</p>
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
                            <p>Dormitório amplo com armários e ar condicionado!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--imoveis' src={image7} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Cozinha super equipada!</p>
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
                            <p>Em breve, condomínio com ambiente muito agradável.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--imoveis' src={image11} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Em breve, apartamento à beira mar, com piscina.!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--imoveis' src={image12} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Em breve, Localização excelente em Porto de Galinhas!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--imoveis' src={image13} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Porto de Galinhas</h3>
                            <p>Em breve, kit studio super confortável!</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myimoveis" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myimoveis" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
}
