import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCoops } from 'store/actions/coops'

class CoopsItems extends Component {
  componentDidMount() {
    this.props.fetchCoops()
  }

  render() {
    return <h1>items list</h1>
  }
}

const mapStateToProps = state => {
  return {
    coops: state.coops.coops,
    loading: state.coops.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoops: () => dispatch(fetchCoops())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoopsItems)
