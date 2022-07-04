import React, { Component } from 'react'
import Navigation from './Components/Navigation/Navigation'
import News from './Components/News/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <News pageSize={5} country="in"/>
      </div>
    )
  }
}
