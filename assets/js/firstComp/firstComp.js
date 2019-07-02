import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Marquez Pickett'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return ( <div>
      <h1>hello hh</h1>
    </div>
            
            )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
