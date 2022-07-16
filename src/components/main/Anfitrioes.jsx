import React from 'react'
import image1 from '../../images/Anfitriao.jpeg'
import './anfitrioes.css'


export default function Anfitrioes() {

    return (

        <div className='anfitrioes--presentation' id='anfitrioes'>
            <div id="myAnfitrioes" className="carousel slide anfitrioes--slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myAnfitrioes" data-slide-to="0" className="active"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--anfitrioes' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Anfitriões</h3>
                            <p>Paulo e Margarida a seu dispor!</p>
                        </div>
                    </div>

                </div>

                <a className="left carousel-control" href="#myAnfitrioes" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myAnfitrioes" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='anfitrioes--presentation--text'>
                <div className='anfitrioes--presentation--text--title'>
                    <p>os Anfitriões</p>
                </div>
                <div className='anfitrioes--presentation--text--body'>
                    <p>Somos Paulo Ricardo e Maria Margarida e temos um prazer que é 
                    compartilhar o conforto e aconchego dos imóveis de <strong>Casas de Margarida </strong> 
                    com os nossos hóspedes.</p>
                    <p>Todos os nossos imóveis foram montados pensando no conforto e 
                    funcionalidade que nós mesmos apreciamos. Adoramos cozinhar 
                    as nossas próprias refeições e acreditamos que ter os utensílios 
                    adequados para isso proporcionam muita satisfação na atividade de 
                    preparar o alimento.</p>
                    <p> Gostamos de aproveitar  o lugar, a paisagem, as pessoas, mas queremos 
                    retornar para um lugar confortável, estirar em um sofá e assistir os 
                    nossos programas favoritos na TV.  
                    Assim, compartilhamos com vocês os nossos imóveis em diversas 
                    praias do Brasil para que eles sejam a extensão de suas próprias casas.</p>
                    <p>Apreciamos as pessoas por sua essência independentemente de origem, etnia, 
                    religião, ideologia ou qualquer escolha ou característica pessoal.</p>
                    <p>Estaremos sempre felizes em recebê-los.</p>
                </div>
            </div>
        </div>

    )
}
