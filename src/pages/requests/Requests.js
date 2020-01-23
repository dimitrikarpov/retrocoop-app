import React, { Component } from 'react'
import RequestService from 'api/services/requests'

class Requests extends Component {
  componentDidMount() {
    RequestService.getAll();
  }

  render() {
    return <h1>Requests component</h1>
  }
}

export default Requests
