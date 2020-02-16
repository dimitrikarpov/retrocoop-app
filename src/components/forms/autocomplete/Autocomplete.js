import React, { Component } from 'react'
import { func, string, bool, oneOfType, number } from 'prop-types'
import cn from 'classnames'
import './styles.scss'
import { findByTitle, findByValue } from './helpers'
import TextField from 'components/forms/textField/TextField'
import Dropdown from 'components/forms/dropdown/Dropdown'

const params = { limit: 10 }

// TODO:
// * debounce
// * memo

class Autocomplete extends Component {
  state = {
    input: '',
    hidden: true,
    options: [],
    value: ''
  }

  onChange = async e => {
    const { value, options } = this.state
    const input = e.target.value
    let nextState = { ...this.state }

    // Case when user input is empty
    if (!input) {
      nextState = { ...nextState, options: [], input }
    }

    // Case when user type something
    if (input) {
      const field = this.props.field || this.props.name

      const options = await this.props.fetch({
        params: {
          ...params,
          [`${field}[like]`]: input
        },
        transformResponse: [this.props.mapper]
      })

      nextState = { ...nextState, options, input, hidden: false }
    }

    // Case when value was selected but then user updated input
    const valueTitle = findByValue(value, options)
    if (value && valueTitle !== input) {
      nextState = { ...nextState, value: '' }
      this.onChangeValue('')
    }

    // Case when user input equals on the options
    const foundValue = findByTitle(input, options)
    if (foundValue) {
      nextState = { ...nextState, value: foundValue, hidden: true }
      this.onChangeValue(foundValue)
    }

    this.setState(nextState)
  }

  onSelect = value => {
    const { options } = this.state
    this.onChangeValue(value)
    this.setState({
      hidden: true,
      input: findByValue(value, options),
      value
    })
  }

  onChangeValue = value => {
    this.props.onChange(value)
  }

  render() {
    const { hidden, options, input } = this.state
    const { name, error, helperText } = this.props

    return (
      <div className='form-group'>
        <input type='hidden' name={name} />

        <TextField
          name='someField'
          value={input}
          onChange={this.onChange}
          helperText={helperText}
          error={error}
        />

        <Dropdown hidden={hidden} options={options} onChange={this.onSelect} />
      </div>
    )
  }
}

Autocomplete.defaultProps = {
  mapper: () => {},
  error: false,
  helperText: ''
}

Autocomplete.propTypes = {
  name: string.isRequired,
  value: oneOfType([string, number]).isRequired,
  onChange: func.isRequired,
  fetch: func.isRequired,
  field: string,
  mapper: func,
  error: bool,
  helperText: string
}

export default Autocomplete
