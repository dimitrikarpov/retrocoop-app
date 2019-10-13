import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { fetchPlatforms } from 'store/actions/platforms'
import Requests from 'pages/requests/Requests'
import AddRequest from 'pages/addRequest/AddRequest'
import NotFound from 'pages/notFound/NotFound'

class App extends Component {
  componentDidMount() {
    this.props.fetchPlatforms()
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Requests} />
            <Route path='/add' component={AddRequest} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlatforms: () => dispatch(fetchPlatforms())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
