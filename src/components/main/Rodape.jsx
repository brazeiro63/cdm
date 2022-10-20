import React from 'react'
import './rodape.css'

export default function Main(props) {
    let ident = props.ident
    return (
        <div className='rodape' >
            <div className='rodape--corpo'>
                <div className='rodape--text' id={ident}>
                    {/* <div className='rodape--grid'>
                        <div className='rodape--grid--row'>
                            <div>Imóvel</div>
                            <div>Airbnb</div>
                            <div>TripAdvisor</div>
                            <div>Bookking</div>
                        </div>
                        <div className='rodape--grid--row'>
                            <div>Morro de São Paulo</div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                        </div>
                        <div className='rodape--grid--row'>
                            <div>Muro Alto</div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="https://www.tripadvisor.com.br/VacationRentalReview-g2577932-d24153883-Casas_de_Margarida_Muro_Alto_Porto_de_Galinhas-Nossa_Senhora_do_O_State_of_Pernambuc.html" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons">radio_button_unchecked</span></a></div>
                        </div>
                        <div className='rodape--grid--row'>
                            <div>Porto de Galinhas</div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="#contato" ><span class="material-icons">radio_button_unchecked</span></a></div>
                            <div><a href="" ><span class="material-icons">radio_button_unchecked</span></a></div>
                        </div>
                        <div className='rodape--grid--row'>
                            <div>Porto de Galinhas</div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                        </div>
                        <div className='rodape--grid--row'>
                            <div>Porto de Galinhas</div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                        </div>
                        <div className='rodape--grid--row'>
                            <div>Maceio</div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                            <div><a href="" ><span class="material-icons"><i class="fa fa-tripadvisor" aria-hidden="true"></i></span></a></div>
                            <div><a href="" ><span class="material-icons">check_circle_outline</span></a></div>
                        </div>
                    </div> */}
                </div>
                <div className='rodape--contatos'>
                    <div>Casas de Margarida</div>
                    <div><a href="mailto:casasdemargarida@gmail.com">casasdemargarida@gmail.com</a></div>
                    <div>(61)99217-2427</div>
                    <div><a href="http://www.instagram.com/casasdemargarida">@casasdemargarida</a></div>
                </div>
            </div>
        </div>
    )
}

