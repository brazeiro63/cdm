import React from 'react'
import './menuOption.css'

class MenuOption extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className='menuOption'>
        <a href={this.props.dest}>
          <button className='menuOption-button'>{this.props.text}
          </button>
        </a>
      </div >
    )
  }
}

export default MenuOption;
