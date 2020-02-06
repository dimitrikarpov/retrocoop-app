import React from 'react'
import {func, object} from 'prop-types'

const withDataFetching = ({request, params}) => WrappedComponent => {
  class WithDataFetching extends React.Component {
    state = {
      results: [],
      loading: true,
      error: ''
    }

    async fetchData() {
      try {
        const res = await request(params)
        const data = res.data

        if (data) {
          this.setState({
            results: data,
            loading: false
          })
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message
        })
      }
    }

    async componentDidMount() {
      this.fetchData()
    }

    render() {
      const { results, loading, error } = this.state

      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      )
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`

  return WithDataFetching
}

export default withDataFetching

withDataFetching.defaultProps = {
    params: {}
}

withDataFetching.PropTypes = {
    request: func.isRequired,
    params: object
}
