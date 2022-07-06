import React from 'react'
import './menuOption.css'

class MenuOption extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);

    this.state = {
    }
  }

  render() {
    return (
      <div className='menuOption'>
        <button className='menuOption-button'>{this.props.text}
          {/* <a href={this.props.dest}>{this.props.text} </a> */}
        </button>
      </div >
    )
  }
}

export default MenuOption;
