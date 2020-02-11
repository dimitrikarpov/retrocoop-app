import React, { Component } from 'react'
import { func, string, bool, oneOfType, number } from 'prop-types'
import cn from 'classnames'
import './styles.scss'
import { findByTitle, findByValue } from './helpers'

const params = { limit: 10 }

// TODO:
// * debounce
// * memo

class Autocomplete extends Component {
  state = {
    input: '',
    visible: true,
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

      nextState = { ...nextState, options, input, visible: true }
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
      nextState = { ...nextState, value: foundValue, visible: false }
      this.onChangeValue(foundValue)
    }

    this.setState(nextState)
  }

  onSelect = (value, title) => {
    this.onChangeValue(value)
    this.setState({ visible: false, input: title, value })
  }

  onChangeValue = value => {
    this.props.onChange(value)
  }

  render() {
    const { visible, options, input } = this.state
    const { name, error, helperText } = this.props

    return (
      <div className='form-group'>
        <input type='hidden' name={name} />
        <input
          className='form-input'
          type='text'
          value={input}
          onChange={this.onChange}
          autoComplete='off'
        />
        <div
          className={cn('suggestions__wrapper', {
            'suggestions__wrapper--hidden': !visible
          })}
        >
          <ul className='suggestion-items'>
            {options.map(({ value, title }) => (
              <li
                key={value}
                className='suggestion-item'
                onClick={() => this.onSelect(value, title)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <span
          className={cn('form-input__helper-text', {
            'form-input__helper-text--error': error
          })}
        >
          {helperText}
        </span>
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
