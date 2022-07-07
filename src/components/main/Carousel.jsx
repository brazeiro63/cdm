import React, { useState } from 'react'
import Acomodacoes from "../../data/CarouselData.json"

export default function Carousel() {
    let acomodacoes = Acomodacoes;
    let [contador] = useState(0);
    contador -= 1;

    return (
        <div class='carousel--main'>
            <div class="container">
                <h2>Carousel Example</h2>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        {acomodacoes.map(() => {
                            return (
                                <li data-target="#myCarousel" data-slide-to={contador += 1} ></li>
                            )
                        })}
                    </ol>

                    {/* Wrapper for slides  */}
                    <div class="carousel-inner">
                        {acomodacoes.map((acomodacao) => {
                            console.log(acomodacao.image_name)
                            console.log(acomodacoes[0].image_name)
                            return (
                                <div class={"item" + (acomodacao.image_name === acomodacoes[0].image_name ? " active" : "")}>
                                    < img src={'../images/' + acomodacao.image_name} alt={acomodacao.cidade} />
                                    <div class="carousel-caption">
                                        <h3>{acomodacao.cidade} </h3>
                                        <p>{acomodacao.description} </p>
                                    </div>
                                </div>
                            )
                        })}



                        {/* <div class="item active">
                            <img src="la.jpg" alt="Los Angeles" />
                            <div class="carousel-caption">
                                <h3>Los Angeles</h3>
                                <p>LA is always so much fun!</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src="chicago.jpg" alt="Chicago" />
                            <div class="carousel-caption">
                                <h3>Chicago</h3>
                                <p>Thank you, Chicago!</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src="ny.jpg" alt="New York" />
                            <div class="carousel-caption">
                                <h3>New York</h3>
                                <p>We love the Big Apple!</p>
                            </div>
                        </div> */}

                    </div>

                    {/* <-- Left and right controls --> */}
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div >
    )
}
