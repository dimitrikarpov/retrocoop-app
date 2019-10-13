import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { fetchPlatforms } from 'store/actions/platforms'
import RequestsItems from 'pages/requests/items/RequestsItems'

class App extends Component {
  componentDidMount() {
    this.props.fetchPlatforms()
  }

  render() {
    return (
      <div className='App'>
        <RequestsItems />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlatforms: () => dispatch(fetchPlatforms())
  }
}

export default connect(null, mapDispatchToProps)(App)
