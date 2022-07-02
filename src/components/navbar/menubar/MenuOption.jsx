import React from 'react'
import './menuOption.css'

class MenuOption extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicks: 0,
      remaining: 100
    }
  }

  clickMe() {
    this.setState({
      clicks: this.state.clicks + 1,
      remaining: this.state.remaining - 1
    })
  }

  render() {
    return (
      <div className='menuOption'>
        <button className='menuOption-button'>
          <a href={this.props.dest} onClick={() => { this.clickMe() }} className='menuOption--link' >{this.props.text} </a>
        </button>
      </div >
    )
  }
}

export default MenuOption;
