import React from 'react'
import './main.css'

export default function Main(props) {
  let ident = props.ident
  return (
    <div className='main' >
      <div className='main--corpo'>
        <div className='main-text' id={ident} >
          <p >Bloco </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

