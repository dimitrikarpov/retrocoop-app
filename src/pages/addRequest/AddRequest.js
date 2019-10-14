import React, { Component } from 'react'
import RequestsForm from 'components/requestForm/RequestForm'

class AddRequest extends Component {
  onSubmit = ({ starts_at, ends_at, use_mic, platform, game, skill }) => {
    console.log('on submit fired', starts_at, ends_at)
  }

  render() {
    return (
      <>
        <h1>Add Request Page</h1>
        <RequestsForm onSubmit={this.onSubmit} />
      </>
    )
  }
}

export default AddRequest
