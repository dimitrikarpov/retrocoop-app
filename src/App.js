import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { fetchPlatforms } from 'store/actions/platforms'
import Coops from 'pages/coops/Coops'
import AddCoop from 'pages/addCoop/AddCoop'
import NotFound from 'pages/notFound/NotFound'
import Header from 'components/layout/header/Header'

class App extends Component {
  componentDidMount() {
    this.props.fetchPlatforms()
  }

  render() {
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path='/' exact component={Coops} />
          <Route path='/add' component={AddCoop} />
          <Route component={NotFound} />
        </Switch>
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
