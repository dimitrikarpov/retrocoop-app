import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRequests } from 'store/actions/requests'

class RequestsItems extends Component {
  componentDidMount() {
    this.props.fetchRequests()
  }

  render() {
    return <h1>items list</h1>
  }
}

const mapStateToProps = state => {
  return {
    requests: state.requests.requests,
    loading: state.requests.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRequests: () => dispatch(fetchRequests())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestsItems)
