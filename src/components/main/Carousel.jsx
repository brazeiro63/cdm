import React from 'react'
import image1 from '../../images/Image1.jpeg'
import image2 from '../../images/Image2.jpeg'
import image3 from '../../images/Image3.jpeg'
import image4 from '../../images/Image4.jpeg'
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







        // {/* <div className='carousel--main'>
        //     <div className="container">
        //         <h2>Carousel Example</h2>
        //         <div id="myCarousel" className="carousel slide" data-ride="carousel">
        //             <ol className="carousel-indicators">
        //                 {acomodacoes.map(() => {
        //                     return (
        //                         <li data-target="#myCarousel" data-slide-to={contador += 1} ></li>
        //                     )
        //                 })}
        //             </ol>

        //             {/* Wrapper for slides  */}
        //             <div className="carousel-inner">
        //                 {acomodacoes.map((acomodacao) => {
        //                     let urlImage = "http://localhost:3000/src/components/main/" + acomodacao.image_name
        //                     console.log(urlImage)
        //                     return (
        //                         <div className={"item" + (acomodacao.image_name === acomodacoes[0].image_name ? " active" : "")}>
        //                             <img src={urlImage} alt={acomodacao.cidade} width="500" height="600" />
        //                             <div className="carousel-caption">
        //                                 <h3>{acomodacao.cidade} </h3>
        //                                 <p>{acomodacao.description} </p>
        //                             </div>
        //                         </div>
        //                     )
        //                 })}



        //                 {/* <div className="item active">
        //                     <img src="la.jpg" alt="Los Angeles" />
        //                     <div className="carousel-caption">
        //                         <h3>Los Angeles</h3>
        //                         <p>LA is always so much fun!</p>
        //                     </div>
        //                 </div>

        //                 <div className="item">
        //                     <img src="chicago.jpg" alt="Chicago" />
        //                     <div className="carousel-caption">
        //                         <h3>Chicago</h3>
        //                         <p>Thank you, Chicago!</p>
        //                     </div>
        //                 </div>

        //                 <div className="item">
        //                     <img src="ny.jpg" alt="New York" />
        //                     <div className="carousel-caption">
        //                         <h3>New York</h3>
        //                         <p>We love the Big Apple!</p>
        //                     </div>
        //                 </div> */}

        //             </div>

        //             {/* <-- Left and right controls --> */}
        //             <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        //                 <span className="glyphicon glyphicon-chevron-left"></span>
        //                 <span className="sr-only">Previous</span>
        //             </a>
        //             <a className="right carousel-control" href="#myCarousel" data-slide="next">
        //                 <span className="glyphicon glyphicon-chevron-right"></span>
        //                 <span className="sr-only">Next</span>
        //             </a>
        //         </div>
        //     </div>
        // </div > */}
