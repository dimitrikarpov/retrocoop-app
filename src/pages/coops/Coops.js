import React, { Component } from 'react'
import CoopsService from 'services/api/coopsApi'

class Coops extends Component {
  componentDidMount() {
    CoopsService.get()
  }

  render() {
    return <h1>Coops page</h1>
  }
}

export default Coops
