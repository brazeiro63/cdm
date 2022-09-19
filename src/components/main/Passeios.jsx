import React from 'react'
import image1 from '../../images/passeios/Morro/PasseioMorro06.jpeg'
import image2 from '../../images/passeios/Morro/PasseioMorro07.jpeg'
import image3 from '../../images/passeios/Morro/PasseioMorro08.jpeg'
import image4 from '../../images/passeios/Morro/PasseioMorro09.jpeg'
import image5 from '../../images/passeios/Porto/PasseioPorto05.jpeg'
import image6 from '../../images/passeios/Porto/PasseioPorto08.jpeg'
import image7 from '../../images/passeios/Porto/PasseioPorto09.jpeg'
import './passeios.css'


export default function Passeios() {

    return (

        <div className='passeios--presentation' id='passeios'>
            <div className='passeios--presentation--text'>
                <div className='passeios--presentation--text--title'>
                    <p>Atrações</p>
                </div>
                <div className='passeios--presentation--text--body'>
                    <p>
                    </p>
                </div>
            </div>
            <div id="myPasseios" className="carousel slide passeios--slide--show" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myPasseios" data-slide-to="0" className="active"></li>
                    <li data-target="#myPasseios" data-slide-to="1"></li>
                    <li data-target="#myPasseios" data-slide-to="2"></li>
                    <li data-target="#myPasseios" data-slide-to="3"></li>
                    <li data-target="#myPasseios" data-slide-to="4"></li>
                    <li data-target="#myPasseios" data-slide-to="5"></li>
                    <li data-target="#myPasseios" data-slide-to="6"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className='img--passeios' src={image1} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--passeios' src={image2} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--passeios' src={image3} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img className='img--passeios' src={image4} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--passeios' src={image5} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--passeios' src={image6} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className='img--passeios' src={image7} alt="Morro de São Paulo" />
                        <div className="carousel-caption">
                            <h3>Morro de São Paulo</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myPasseios" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myPasseios" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
}
