import React, { Component } from 'react'
import CoopsService from 'api/newservices/coops'

class Requests extends Component {
  componentDidMount() {
    CoopsService.get()
  }

  render() {
    return <h1>Requests component</h1>
  }
}

export default Requests
