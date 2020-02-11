import React, { Component } from 'react'
import { func, string, bool } from 'prop-types'
import cn from 'classnames'
import './styles.scss'

const params = { limit: 10 }

class Autocomplete extends Component {
  state = {
    input: '',
    visible: true,
    options: []
  }

  onChange = async e => {
    const input = e.target.value
    const field = this.props.field || this.props.name

    if (!input) {
      this.setState({ input, options: [] })
      return
    }

    const options = await this.props.fetch({
      params: {
        ...params,
        [`${field}[like]`]: input
      },
      transformResponse: [this.props.mapper]
    })

    this.setState({ input, options })
  }

  render() {
    const { input, visible, options } = this.state
    const { name, error, helperText } = this.props

    return (
      <div className='form-group'>
        <input
          name={name}
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
              <li key={value} className='suggestion-item'>
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
  fetch: func.isRequired,
  field: string,
  mapper: func,
  error: bool,
  helperText: string
}

export default Autocomplete
