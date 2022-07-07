import React, { Component } from 'react'
import spinner from './Spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={spinner} alt="Spinner"/>
      </div>
    )
  }
}
