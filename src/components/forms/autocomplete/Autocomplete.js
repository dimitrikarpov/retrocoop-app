import React, { Component } from 'react'
import { func, string } from 'prop-types'
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
      this.setState({input, options: []})
      return
    }

    const options = await this.props.fetch({
      params: {
        ...params,
        [`${field}[like]`]: input
      },
      transformResponse: [this.props.transformResponse]
    })

    this.setState({ input, options })
  }

  render() {
    const { input, visible, options } = this.state
    const { name } = this.props

    return (
      <div className='autocomplete'>
        <div className='input__wrapper'>
          <input
            name={name}
            className='input'
            type='text'
            value={input}
            onChange={this.onChange}
            autoComplete='off'
          />
        </div>
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
      </div>
    )
  }
}

Autocomplete.defaultProps = {
  transformResponse: () => {}
}

Autocomplete.propTypes = {
  name: string.isRequired,
  fetch: func.isRequired,
  field: string,
  transformResponse: func
}

export default Autocomplete
